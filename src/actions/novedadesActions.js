import { createAsyncThunk } from '@reduxjs/toolkit';
import { saveNews, updateNews, getNews, getNewsByParams } from '../Services/newsService';


const saveNovedades = createAsyncThunk('news/saveNews', async (novedad) => {
  const { error, data } = await saveNews(novedad);
  return { error, data };
});

const updateNovedades = createAsyncThunk('news/updateNews', async (novedad) => {
  const { error, data } = await updateNews(novedad);
  return { error, data };
});

const getNovedades = createAsyncThunk('news/getNews', async () => {
  const { error, data } = await getNews();
  return { error, data };
});

const getNovedadesByParams = createAsyncThunk('news/getNovedadesByParams', async (searchParam) => {
  const { error, data } = await getNewsByParams(searchParam);
  return { error, data };
});

export { saveNovedades , updateNovedades, getNovedades, getNovedadesByParams};