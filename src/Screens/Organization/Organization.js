import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Spinner } from 'react-bootstrap';
import * as organizationService from'../../Services/organizationService';
import './styles.css';
import { EDIT_ORGANIZATION } from '../../rutas/config';
import {
  ORGANIZATION_FETCH_ERROR,
  ORGANIZATION_LOGO,
  ORGANIZATION_NAME,
  ORGANIZATION_DESCRIPTION,
} from '../../Helpers/messagesText';

const Organization = () => {
  const { push } = useHistory();
  const [organizationData, setOrganizationData] = useState();
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    getOrganization();
  }, []);

  const getOrganization = async () => {
    const { data } = await organizationService.getOrganizationData();
    data ? setOrganizationData(data) : setErrorMessage(true);
  };

  const goToEdit = (e) => {
    push(EDIT_ORGANIZATION, { id: organizationData?.id });
  };

  return (
    <div className="container">
      {errorMessage && <p className="align-text-center">{ORGANIZATION_FETCH_ERROR}</p>}
      <div className="organization-fields-container">
        {organizationData ? (
          <>
            <p>
              {`${ORGANIZATION_LOGO}:`} <img src={organizationData.logo} alt="logo" />
            </p>
            <p>
              {`${ORGANIZATION_NAME}:`} {organizationData.name}
            </p>
            <p>
              {`${ORGANIZATION_DESCRIPTION}:`} {organizationData.short_description}
            </p>
            <button className="submit-btn" type="submit" onClick={goToEdit}>
              Editar
            </button>
          </>
        ) : (
          <Spinner animation="border" />
        )}
      </div>
    </div>
  );
};

export default Organization;
