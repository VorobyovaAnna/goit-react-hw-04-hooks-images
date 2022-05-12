import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from './GlobalStyle';
import { AppContainer } from './App.styled';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import api from '../services/api-service';
import Button from './Button';
import Modal from './Modal';
import Loader from './Loader';


export default function App() {

  const [images, setImages] = useState([]);
  const [largeImage, setLargeImage] = useState('');
  const [alt, setAlt] = useState('');
  const [searchName, setSearchName] = useState('');
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!searchName || !page) return;

    (async function fetchImg() {
      setIsLoading(true);
      try {
        const data = await api.getImages(searchName, page);
        if (!data.hits.length) {
          toast.error('Sorry, there are no images matching your search query. Please try again.');
          setIsLoading(false);
          return
        }
        setImages(p => [...p, ...data.hits]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        toast.error('Sorry, there are no images matching your search query. Please try again.');
      }
    })();
  }, [searchName, page]);
  


  const handleFormSubmit = newSearchName => {
    if (newSearchName === searchName) return;
    
    setSearchName(newSearchName);
    setPage(1);
    setImages([]);
    setIsModalOpen(false);
    setIsLoading(true);
  };


  const onLoadMore = () => {
    setPage(prev => prev + 1);
    setIsLoading(true);
  };
  

  const onOpenModal = id => {
    setIsModalOpen(true);
    setLargeImage(images.find(image => image.id === id).largeImageURL);
    setAlt(images.find(image => image.id === id).tags);
  };

  const onCloseModal = () => setIsModalOpen(false);

  return (
    <AppContainer>
      <GlobalStyle />
      <Searchbar onSubmit={handleFormSubmit} images={images} />
      {images.length > 0 && <ImageGallery images={images} onOpenModal={onOpenModal}/>}
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && <Button onClick={onLoadMore} />}
      {isModalOpen && <Modal largeImageURL={largeImage} alt={alt} onCloseModal={onCloseModal} />}
      <ToastContainer autoClose={3000} />
    </AppContainer>
  );
}