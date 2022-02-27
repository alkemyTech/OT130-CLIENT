import { createAsyncThunk } from '@reduxjs/toolkit';
import { saveNews, updateNews } from '../Services/newsService';


const saveNovedades = createAsyncThunk('news/saveNews', async (novedad) => {
  const { error, data } = await saveNews(novedad);
  return { error, data };
});

const updateNovedades = createAsyncThunk('news/updateNews', async (novedad) => {
  const { error, data } = await updateNews(novedad);
  return { error, data };
});

export { saveNovedades , updateNovedades};