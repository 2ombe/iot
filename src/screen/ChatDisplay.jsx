import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from "axios";

function ChatDisplay() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://hatangaiot.atwebpages.com/get_data.php");
        const apiData = response.data;

        // Format the API data for the Google Chart
        const chartData = [
          ['Fertilizer', 'Percentage'],
          ['Nitrogen', apiData.nitrogen],
          ['Phosphorus', apiData.phosphorus],
          ['Potassium', apiData.potassium],
          ['pH', apiData.pH],
          ['Temperature', apiData.temperature],
          ['Moisture', apiData.moisture],
        ];

        setData(chartData);
      } catch (error) {
        console.error("Error fetching data from the API:", error);
      }
    };

    fetchData();
  }, []);

  const options = {
    title: 'Fertilizer Components Chart',
    legend: { position: 'top' },
    colors: ['#b87333', '#1f78b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd'],
  };

  return (
    <Card style={{ margin: "2rem" }}>
      <Card.Header className="mt-3">Fertilizer Components Chart</Card.Header>
      <Row>
        <Col md={6}>
          <Card.Body>
            {data ? (
              <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={'100%'}
                height={'400px'}
                loader={<div>Loading chart ...</div>}
              />
            ) : (
              <div>Loading data...</div>
            )}
          </Card.Body>
        </Col>
        <Col md={6}>
          <Card style={{ margin: "3rem" }}>
            <Card.Header>Fertilizer Components Information</Card.Header>
            <Card.Body>
              <ul>
                {data &&
                  data.slice(1).map(([component, percentage]) => (
                    <li key={component}>
                      {component}: {percentage}%
                    </li>
                  ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Card>
  );
}

export default ChatDisplay;
