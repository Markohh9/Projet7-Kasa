import Navbar from '../components/Navbar';
import BodyError from '../components/BodyError';
import Footer from '../components/Footer'

function ErrorPage() {
    return (
    <div>
        <header>
            <Navbar />
        </header>
        <body>
            <BodyError />
        </body>
        <footer>
            <Footer />
        </footer>
    </div>
    );
}

export default ErrorPage;