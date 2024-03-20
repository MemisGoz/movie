"use client"
import { useState, useEffect } from 'react';
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/command";
import { getMovieData } from '@/app/items/getData';

function Search() {
  interface SearchResults {
    id: number;
    title?: string;
    name?: string;
  }
  
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<{ movies: SearchResults[], tvShows: SearchResults[], actors: SearchResults[] }>({
    movies: [],
    tvShows: [],
    actors: [],
  });

  const [inputFocused, setInputFocused] = useState(false);

  useEffect(() => {
    const debounceFetch = setTimeout(() => {
      const fetchSearchResults = async () => {
        if (searchTerm.trim() !== '') {
          try {
            const moviesResponse = await getMovieData('movies', { query: searchTerm });
            const tvShowsResponse = await getMovieData('tv', { query: searchTerm });
            const actorsResponse = await getMovieData('actors', { query: searchTerm });
  
            const movies = moviesResponse.results;
            const tvShows = tvShowsResponse.results;
            const actors = actorsResponse.results;

            
  
            setSearchResults({ movies, tvShows, actors });
          } catch (error) {
            console.error('Error fetching search results:', error);
            setSearchResults({ movies: [], tvShows: [], actors: [] });
          }
        } else {
          setSearchResults({ movies: [], tvShows: [], actors: [] });
        }
      };
  
      fetchSearchResults();
    }, 500); // Debounce time
  
    return () => clearTimeout(debounceFetch); // Cleanup function
  
  }, [searchTerm]);
  
  return (
    <Command>
      <CommandInput
        placeholder="search..."
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
        value={searchTerm}
        onInput={(e) => setSearchTerm((e.target as HTMLInputElement).value)}
      />
     {inputFocused && (
  <CommandList>
    {console.log('Search Results:', searchResults)}
    {searchTerm && searchResults.movies.length === 0 && searchResults.tvShows.length === 0 && searchResults.actors.length === 0 ? (
      <CommandEmpty>No results found.</CommandEmpty>
    ) : (
      <>
        {searchTerm && searchResults.movies.length > 0 && (
          <CommandGroup heading="Movies">
            {searchResults.movies.map(movie => (
              <CommandItem key={movie.id}>{movie.title}</CommandItem>
            ))}
          </CommandGroup>
        )}
        {searchTerm && searchResults.movies.length > 0 && searchResults.tvShows.length > 0 && <CommandSeparator />}
        {searchTerm && searchResults.tvShows.length > 0 && (
          <CommandGroup heading="TV Shows">
            {searchResults.tvShows.map(show => (
              <CommandItem key={show.id}>{show.name}</CommandItem>
            ))}
          </CommandGroup>
        )}
        {searchTerm && searchResults.tvShows.length > 0 && searchResults.actors.length > 0 && <CommandSeparator />}
        {searchTerm && searchResults.actors.length > 0 && (
          <CommandGroup heading="Actors">
            {searchResults.actors.map(actor => (
              <CommandItem key={actor.id}>{actor.name}</CommandItem>
            ))}
          </CommandGroup>
        )}
      </>
    )}
  </CommandList>
)}

    </Command>
  );
}

export default Search;
