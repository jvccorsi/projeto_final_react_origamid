import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';

import { PHOTOS_GET } from '../../api';

//Styles
import styles from './FeedPhotos.module.css';

const FeedPhotos = ({ page, user, setModalPhoto, setInfinite }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchProdutos() {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page: page, total: 9, user });
      const { response, json } = await request(url, options); //Executa o request do HOOK: UseFetch
      if (response && response.ok && json.length < total) {
        setInfinite(false);
      }
    }
    fetchProdutos();
  }, [request, user, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    //Os valores da API São salvos no data
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {/* Para cada valor do data, exiba uma foto */}
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
