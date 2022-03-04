import React, { useEffect, useState } from 'react';
import ActivitiesContent from '../../Components/Activities/ActivitiesContent';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Spinner } from 'react-bootstrap';
import * as organizationService from '../../Services/organizationService';
import { EDIT_ORGANIZATION } from '../../routes/config';
import {
  ORGANIZATION_FETCH_ERROR,
  ORGANIZATION_LOGO,
  ORGANIZATION_NAME,
  ORGANIZATION_DESCRIPTION,
} from '../../Helpers/messagesText';
import { ErrorAlert } from '../../Components/Alert';
import './styles.css';

const Organization = () => {
  const { push } = useHistory();
  const [organizationData, setOrganizationData] = useState();

  useEffect(() => {
    getOrganization();
  }, []);

  const getOrganization = async () => {
    const { data, error } = await organizationService.getOrganizationData();
    data ? setOrganizationData(data.data) : ErrorAlert(ORGANIZATION_FETCH_ERROR, error.message);
  };

  const goToEdit = (e) => {
    push(EDIT_ORGANIZATION, { id: organizationData?.id });
  };

  return (
    <div className="organization-main-container">
      <div className="organization-fields-container">
        {organizationData ? (
          <>
            <p>
              {`${ORGANIZATION_LOGO}:`}{' '}
              <img className="img-fluid" src={organizationData.logo} alt="logo" />
            </p>
            <p>
              {`${ORGANIZATION_NAME}:`} {organizationData.name}
            </p>
            <p>
              {`${ORGANIZATION_DESCRIPTION}:`}
              <ActivitiesContent contentHtml={organizationData.short_description} />
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
