import Alert from "react-bootstrap/Alert";

function AlertMessage({ serverMessage }) {
  console.log(serverMessage);
  switch (serverMessage) {
    case "danger":
      return <Alert variant="danger">Server Is Down</Alert>;
    case "info":
      return <Alert variant="info">Server Is Working</Alert>;
    case "warning":
      return <Alert variant="warning">Server Is Being Serviced</Alert>;
  }

  return <Alert variant="danger">Server Error</Alert>;
}

export default AlertMessage;
