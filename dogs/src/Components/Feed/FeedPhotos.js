import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';

import { PHOTOS_GET } from '../../api';

//Styles
import styles from './FeedPhotos.module.css';

const FeedPhotos = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchProdutos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options); //Executa o request do HOOK: UseFetch
      // console.log(json);
      console.log(data);
    }
    fetchProdutos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    //Os valores da API São salvos no data
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {/* Para cada valor do data, exiba uma foto */}
        {data.map((photo) => (
          <FeedPhotosItem key={photo.id} photo={photo} />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
