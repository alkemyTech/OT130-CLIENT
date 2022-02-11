import React from "react";
import "./Donation.css";
import InnerHTML from 'dangerously-set-html-content';

const html = `
<script 
  src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
data-preference-id="356217435-beae5ff8-c30e-4132-bddd-2c0c99cfffb0" 
data-source="button">
</script>
`;
const MercadoPagoButton = () => {
  return (
      <InnerHTML 
        className="donation-button"
        html={html} 
      />
  );
};

export default MercadoPagoButton;
