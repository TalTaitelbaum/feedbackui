import Card from "../components/shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a React app to leave feadback for a product or sevice</p>
        <p>Version: 1.0.0</p>

        <p>
          <a href="/">Back To Home</a>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
