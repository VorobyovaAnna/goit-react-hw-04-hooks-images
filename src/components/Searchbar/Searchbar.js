import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import { SearchbarHeader, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from './Searchbar.styled';

const Searchbar = ({ onSubmit}) => {

  const [searchName, setSearchName] = useState('');
    
  const handleNameChange = event => {
    setSearchName(event.currentTarget.value.toLowerCase());
    };
    
  const handleSubmit = event => {
    event.preventDefault();

    if (searchName.trim() === '') {
      toast.error('Sorry, there are no images matching your search query. Please try again.');
      return;
    }

    onSubmit(searchName);
    setSearchName('');
  };
    
  return (
    <SearchbarHeader>
      <SearchForm onSubmit={handleSubmit}>
          <SearchFormButton type="submit">
              <ImSearch />
              <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchName}
          onChange={handleNameChange}
          />
      </SearchForm>
    </SearchbarHeader>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;