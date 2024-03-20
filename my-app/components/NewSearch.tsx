import { useState, useEffect } from 'react';
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator } from "@/components/ui/command";
import { getMovieData } from '@/app/items/getData';

function NewSearch() {
  interface SearchResults {
    id: number;
    title?: string;
    name?: string;
    type: 'movie' | 'tvShow' | 'actor';
  }
  const [searchTerm, setSearchTerm] = useState('');
  const [combinedResults, setCombinedResults] = useState<SearchResults[]>([]);
  const [inputFocused, setInputFocused] = useState(false);

  useEffect(() => {
    const debounceFetch = setTimeout(async () => {
      if (searchTerm.trim() !== '') {
        try {
          const allResponse = await getMovieData({ movies: 'movies', tv: 'tv', actors: 'actors' }, { query: searchTerm });

          const combined = [
            ...allResponse.movies.map(item => ({ ...item, type: 'movie' })),
            ...allResponse.tv.map(item => ({ ...item, type: 'tvShow' })),
            ...allResponse.actors.map(item => ({ ...item, type: 'actor' }))
          ];

          setCombinedResults(combined);
        } catch (error) {
          console.error('Error fetching search results:', error);
          setCombinedResults([]);
        }
      } else {
        setCombinedResults([]);
      }
    }, 500);
    return () => clearTimeout(debounceFetch);
  }, [searchTerm]);

  return (
    <Command >
      <CommandInput
        placeholder="Search...."
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
        value={searchTerm}
        onInput={(e) => setSearchTerm((e.target as HTMLInputElement).value)}
      />
      {inputFocused && (
        <CommandList className=''>
          
          {searchTerm && combinedResults.length > 0 ? (
            combinedResults.map(result => (
              <CommandGroup heading={result.type.charAt(0).toUpperCase() + result.type.slice(1)}>
                <CommandItem key={result.id}>{result.title || result.name}</CommandItem>
              </CommandGroup>
            ))
          ) : (
            <CommandEmpty>No results found.</CommandEmpty>
          )}
        </CommandList>
      )}
    </Command>
  );
}
export default NewSearch;
