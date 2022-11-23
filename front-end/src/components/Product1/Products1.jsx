import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import  {Link}  from 'react-router-dom';
import './Products1.css'

function Product1(props) {
  const { product } = props;
  return (
    <Card className="product" key={product.slug}>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} alt={product.name} srcset="" />
      </Link>
      <Card.Body>
        <Link to={`/product${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Card.Text>${product.price}</Card.Text>
        <Button>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Product1;