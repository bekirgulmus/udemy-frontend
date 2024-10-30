import '../styles/Contact.css';
import BannerImage from '../assets/banner.png';

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{backgroundImage: `url(${BannerImage})`}}
      ></div>
      <div className="rightSide">
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label>Ad</label>
          <input type="text" name="name" placeholder="Lütfen adınızı soyadınızı giriniz..."/>
          <label>Email</label>
          <input type="email" name="email" placeholder="Lütfen emeilinizi giriniz..."/>
          <label>Mesajınız</label>
          <textarea name="message" rows={6} placeholder="Lütfen Mesajınızı giriniz..."></textarea>
        </form>
      </div>
    </div>
  )
}

export default Contact;
