import { React, useState } from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { Row } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import { BsSearch } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { ErrorAlert, SuccessAlert } from '../Alert';
import { NETWORK_ERROR, UNKNOWN_ERROR } from '../../Helpers/messagesText';
import './ActivitySearchForm.css'
import { ActivityItem } from './ActivityItem';
import { deleteActivity } from '../../Services/activitiesService';
import { fetchActivities } from '../../actions/activitiesActions';

function ActivitySearchForm({ activities }) {

    const dispatch = useDispatch();
    const [searchResult, setSearchResult] = useState(null);
    const validationSchema = yup.object({
        buscador: yup
            .string('Enter your email')
            .min(3, 'La busqueda debe tener una longitud mínima de 3 caracteres')
            .required('Requerido'),
    });

    const formik = useFormik({
        initialValues: {
            buscador: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const result = activities.find(activity => activity.name === values);

            if (result) {
                setSearchResult(result);
            }
        },
    });

    const handleDeleteActivity = async (id) => {
        const { error, data } = await deleteActivity(id);
        if (data?.success) {
            SuccessAlert('Actividad eliminada correctamente.');
            dispatch(fetchActivities());
        } else {
            ErrorAlert('Error', error?.message === 'NetworkError' ? NETWORK_ERROR : UNKNOWN_ERROR);
        }
    };

    return (
        <Row className='justify-content-center row-container-form'>
            <form onSubmit={formik.handleSubmit}>
                <Stack spacing={2} sx={{ width: 300 }}>
                    <Autocomplete
                        freeSolo
                        id="free-solo-2-demo"
                        disableClearable
                        options={activities.map((option) => option.name)}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Buscar Actividades"
                                InputProps={{
                                    ...params.InputProps,
                                    type: 'search',
                                }}
                                fullWidth
                                id="buscador"
                                name="buscador"
                                label="Buscar Actividades"
                                value={formik.values.buscador}
                                onChange={formik.handleChange}
                                error={formik.touched.buscador && Boolean(formik.errors.buscador)}
                                helperText={formik.touched.buscador && formik.errors.buscador}
                            />
                        )}
                    />
                </Stack>
                <Button className='btn-activity-search-form' color="primary" variant="contained" type="submit">
                    <BsSearch className='search' />
                </Button>
            </form>
            {
                searchResult &&
                <ActivityItem
                    key={searchResult.id}
                    activity={searchResult}
                    handleDeleteActivity={handleDeleteActivity}
                />
            }
        </Row>
    );
}

export default ActivitySearchForm