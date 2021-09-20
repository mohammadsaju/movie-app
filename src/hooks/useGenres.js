const useGenre = (selectedGenres) => {
    if(selectedGenres.length < 1) return '';
    const genresId = selectedGenres.map((g) => g.id);
    return genresId.reduce((acc, curr) => acc + ',' + curr );
}

export default useGenre;