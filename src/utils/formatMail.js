export const formatEmailMessage = (data) => {
  const { seeking, full_name, email, phone, company, budget, message } = data;
  return `
    <h1>Here new message from FaceIt portal:</h1>
    <br/>
    <span><b>Looking for: </b> ${seeking || ""}</p>
    <span><b>Full name: </b> ${full_name}</p>
    <span><b>Email: </b> ${email}</p>
    <span><b>Phone: </b> ${phone || ""}</p>
    <span><b>Budget: </b> ${budget || ""}</p>
    <span><b>Company: </b> ${company || ""}</p>
    <br/>
    <h5>Text message:</h5>
    <p>${message}</p>
    `;
};