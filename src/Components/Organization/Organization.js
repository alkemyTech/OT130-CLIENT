import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Spinner } from "react-bootstrap";
import { getOrganizationData } from "../../Services/organiationService";
import "./style.css";
import { EDIT_ORGANIZATION } from "../../rutas/config";

const Organization = () => {
  const { push } = useHistory();
  const [organizationData, setOrganizationData] = useState();

  useEffect(() => {
    handleGetOrganization();
  }, []);

  const handleGetOrganization = async () => {
    const { data } = await getOrganizationData();
    setOrganizationData(data);
  };

  const goToEdit = (e) => {
    push(EDIT_ORGANIZATION, { id: organizationData?.id });
  };
  console.log(organizationData)

  return (
    <div className="container">
      <div className="organization-fields-container">
        {organizationData ? (
          <>
            <p>
              Organization logo: <img src={organizationData?.logo} alt="logo" />
            </p>
            <p>Organization name: {organizationData?.name}</p>
            <p>Organization description: {organizationData?.short_description}</p>
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
