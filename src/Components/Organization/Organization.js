import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Spinner } from "react-bootstrap";
import { getOrganizationData } from "../../Services/publicApiService";
import "./style.css";
import { EDIT_ORGANIZATION } from "../../rutas/config";

const OrganizationEdit = () => {
  const { push } = useHistory();
  const [organization, setOrganization] = useState();

  useEffect(() => {
    handleGetOrganization();
  }, []);

  const handleGetOrganization = async () => {
    const { data } = await getOrganizationData();
    setOrganization(data);
  };

  const goToEdit = (e) => {
    push(EDIT_ORGANIZATION, { id: organization?.id });
  };

  return (
    <div className="container">
      <div className="organization-fields-container">
        {organization ? (
          <>
            <p>
              Organization logo: <img src={organization?.logo} alt="logo" />
            </p>
            <p>Organization name: {organization?.name}</p>
            <p>Organization description: {organization?.short_description}</p>
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

export default OrganizationEdit;
