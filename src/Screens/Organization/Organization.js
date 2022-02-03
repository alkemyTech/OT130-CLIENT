import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Spinner } from 'react-bootstrap';
import * as organizationService from '../../Services/organizationService';
import './styles.css';
import { EDIT_ORGANIZATION } from '../../rutas/config';
import {
  ORGANIZATION_FETCH_ERROR,
  ORGANIZATION_LOGO,
  ORGANIZATION_NAME,
  ORGANIZATION_DESCRIPTION,
} from '../../Helpers/messagesText';
import { ErrorAlert } from '../../Components/Alert';

const Organization = () => {
  const { push } = useHistory();
  const [organizationData, setOrganizationData] = useState();

  useEffect(() => {
    getOrganization();
  }, []);

  const getOrganization = async () => {
    const { data } = await organizationService.getOrganizationData();
    data ? setOrganizationData(data) : ErrorAlert(undefined, ORGANIZATION_FETCH_ERROR);
  };

  const goToEdit = (e) => {
    push(EDIT_ORGANIZATION, { id: organizationData?.id });
  };

  return (
    <div className="container">
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
