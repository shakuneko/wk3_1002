import { Row, Col } from "antd";
import ProductItem from "./ProductItem";

export default function ProductList({products}) {
  return (
    <Row gutter={[32, 32]}>
    {products.map(product => (
        <Col 
          key={product.id} 
          sm={{ span: 14 }} 
          lg={{ span: 10 }}
          xl={{ span: 8 }}
          xxl={{ span: 6 }}
        >
          <ProductItem product={product}/>
        </Col>
      ))}
    </Row>
  );
}