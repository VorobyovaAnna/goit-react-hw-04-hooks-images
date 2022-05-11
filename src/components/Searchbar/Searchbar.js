import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import { SearchbarHeader, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from './Searchbar.styled';

export default class Searchbar extends Component {
  state = {
    searchName: '',
  };
    
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
    
  handleNameChange = event => {
    this.setState({ searchName: event.currentTarget.value.toLowerCase() });
    };
    
  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchName.trim() === '') {
      toast.error('Sorry, there are no images matching your search query. Please try again.');
      return;
    }

    this.props.onSubmit(this.state.searchName);
    this.setState({ searchName: '' });
  };
    
  render() {
    return (
     <SearchbarHeader>
        <SearchForm onSubmit={this.handleSubmit}>
            <SearchFormButton type="submit">
                <ImSearch />
                <SearchFormButtonLabel>Search</SearchFormButtonLabel>
            </SearchFormButton>

            <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchName}
            onChange={this.handleNameChange}
            />
        </SearchForm>
     </SearchbarHeader>
    );
  }

}