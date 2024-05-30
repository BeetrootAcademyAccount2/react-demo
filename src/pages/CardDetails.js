import {
  useParams,
  useLoaderData,
  NavLink,
  useLocation,
} from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";

function CardDetails() {
  const params = useParams();

  const details = useLoaderData();

  const location = useLocation();
  const pathArray = location.pathname.split("/");

  console.log(pathArray);

  return (
    <div className="m-4">
      <Breadcrumb>
        <Breadcrumb.Item>{pathArray[0]}</Breadcrumb.Item>
        <Breadcrumb.Item as={NavLink} to="/list">
          {pathArray[1]}
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{pathArray[2]}</Breadcrumb.Item>
      </Breadcrumb>
      <h2>{details.title}</h2>
      <img src={details.thumbnail} alt={details.title} />
      <p>{details.brand}</p>
      <p>{details.description}</p>
      <NavLink to="/list">Go Back</NavLink>
    </div>
  );
}

export const fetchProduct = async ({ params }) => {
  const response = await fetch(`https://dummyjson.com/products/${params.id}`);
  const data = await response.json();
  return data;
};

export default CardDetails;
