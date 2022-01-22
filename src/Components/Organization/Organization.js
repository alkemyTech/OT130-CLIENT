import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getOrganization } from "../../Services/publicApiService";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const Organization = () => {
  const { push } = useHistory();
  const [organization, setOrganization] = useState();

  useEffect(() => {
    handleGetOrganization();
  }, []);

  const handleGetOrganization = async () => {
    const { data } = await getOrganization();
    setOrganization(data);
  };

  const goToEdit = (e) => {
    push("/backoffice/organization/edit", { id: organization.id });
  };

  return (
    <div className="container">
      <div className="organization">
        {organization ? (
          <>
            <p className="org-field">
              Organization logo: <img src={organization?.logo} />
            </p>
            <p className="org-field">Organization name: {organization?.name}</p>
            <p className="org-field">
              Organization description: {organization?.short_description}
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
