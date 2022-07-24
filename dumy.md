function showMessage(input, message, type) {
  const msg = input.parentNode.querySelector('small');
  msg.innerText = message;
  input.className = type ? 'success' : 'error';
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function showSuccess(input) {
  return showMessage(input, '', true);
}

function hasValue(input, message) {
  if (input.value.trim() === '') {
    return showError(input, message);
  }
  return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
  if (!hasValue(input, requiredMsg)) {
    return false;
  }

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;

  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg);
  }
  return true;
}

const form = document.querySelector('#signup');
const NAME_REQUIRED = 'Please enter your name';
const EMAIL_REQUIRED = 'Please enter your email';
const EMAIL_INVALID = 'Please Enter Valid Email. Check you have no capital Letters';

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const nameValid = hasValue(form.elements['name'], NAME_REQUIRED);
  const emailValid = validateEmail(
    form.elements['email'],
    EMAIL_REQUIRED,
    EMAIL_INVALID,
  );
  if (nameValid && emailValid) {
    alert('Request sent successfully');
  }
});

=========================
/* CSS Resetter */

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.modal-buttons button {
  width: 48%;
}

.tech-list.model button {
  width: 100%;
  padding: 1rem 3rem;
  cursor: pointer;
  background-color: white;
  border: 1px solid#a3a09f;
}

.tech-list.model button:hover {
  color: white;
  background-color: #ff6b00;
}

.error {
  border-bottom: 1px solid #dc3545;
  padding: 1rem;
  outline: none;
  background-color: #f5bac0;
}

.error:focus {
  outline: none;
  padding: 1rem;
}

/* input success */
.success {
  border-bottom: 1px solid #198754;
  padding: 1rem;
  outline: none;
}

small {
  color: #dc3545;
}

.modal-buttons {
  padding: 2rem;
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: space-between;
}

.modal-buttons a {
  text-decoration: none;
  color: white;
}

.fa-external-link {
  margin-left: 5px;
  width: 3rem;
}

.fa-github {
  margin-left: 5px;
  width: 3rem;
  padding: 2px;
  padding-right: 2rem;
}

.btn.btn-default {
  background-color: #ff6b00;
  height: 5rem;
  color: rgb(247, 238, 238);
}

.modal-info {
  padding: 0 2rem;
}

.modal-header-title {
  font-family: "Inter", sans-serif;
  font-size: 2rem;
  padding-left: 2rem;
  font-weight: 700;
  line-height: 4rem;
}

.image-prag-container {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.tech-list .skills {
  font-size: 1.5rem;
  line-height: 2rem;
  padding: 1.4rem;
  background-color: rgba(255, 255, 255, 0.244);
  font-family: "Inter", sans-serif;
  font-weight: 400;
}

.modal-body .tech-list .skills {
  outline: #8993a4 1px solid;
}

.project-image img {
  padding-left: 1rem;
  object-fit: contain;
}

.highlighted-project__wrapper {
  display: flex;
  flex-direction: column;
}

*:focus {
  outline: 2px solid #ff660096;
}

html {
  font-size: 62.5%;
  min-height: 100%;
}

body {
  height: 100%;
  width: 100%;
  margin: auto;
}

.main-header {
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 1.6rem 1.4rem;
  background-color: #3c3a39;
  color: white;
  font-size: 2.4rem;
}

.main-header__logo {
  font-family: "Inter", sans-serif;
  line-height: 2rem;
  font-size: 2.5rem;
  text-shadow: 1px 1px rgba(255, 255, 255, 0.729), 2px 2px rgba(128, 128, 128, 0.613);
  font-weight: bold;
  letter-spacing: 2px;
}

.main-header__navigation--menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  align-items: center;
}

.main-header__navigation--menu__list {
  display: none;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  align-items: center;
}

.humbuger-btn {
  width: 25px;
  height: 25px;
  background-color: transparent;
  color: white;
  border: 0;
  cursor: pointer;
  display: none;
  font-size: 2rem;
}

.humbuger-btn:focus {
  outline: none;
}

.fa.fa-times.hide {
  display: none;
}

.main-header__navigation--menu__list .menu__item {
  padding: 1.2rem;
}

.main-header__navigation--menu__list .menu__item .menu__item--link {
  text-decoration: none;
  display: inline-block;
  color: white;
  font-family: "Inter", sans-serif;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
  vertical-align: middle;
}

.main-header__navigation--menu.reversed {
  margin-top: 1px;
}

.msg-icon {
  display: block;
}

.msg-icon path {
  fill: white;
}

.section-intro {
  display: flex;
  background-color: #1c1a19;
  background-image: url(./assets/images/Illustration.svg);
  background-repeat: no-repeat;
  background-position: right -31.25rem bottom -7.25rem;
  background-size: 45rem 45rem;
  height: 100%;
  margin-bottom: 10rem;
  padding: 12rem 2.4rem;
}

.section-intro__text-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.section_intro__primary-heading {
  color: #ff6b00;
  font-family: "Crete Round", serif;
  font-size: 5.6rem;
  line-height: 6.4rem;
  letter-spacing: 0.37px;
  font-weight: 400;
}

.section_intro__secondary-heading {
  color: #fff5e1;
  font-family: "Roboto", sans-serif;
  font-size: 2.4rem;
}

.section-intro__description {
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 1.6rem;
  line-height: 2.4rem;
}

.navigation-list {
  display: flex;
  list-style: none;
  width: 20rem;
  justify-content: space-around;
}

.navigation-list__social--link {
  color: #dbd8d7;
}

.social-icon {
  font-size: 2.4rem;
}

/* SECTION 2 (WORK SECTION) */

.work-section-container {
  display: flex;
  flex-direction: column;
  gap: 8rem;
  padding: 12rem 2.4rem;
}

.work-section__headline-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
}

.work-section-container--heading {
  font-size: 3.8rem;
  font-family: "Crete Round", serif;
  font-weight: 400;
}

.work-bottom {
  width: inherit;
  fill: #212121;
  stroke: #212121;
}

.work-section-container--highlighted-project {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2.4rem;
}

.highlighted-project--wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.work-section-container__project--list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(32.7rem, 1fr));
  grid-gap: 2.4rem;
}

.project-list--li {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: linear-gradient(180.45deg, rgba(38, 38, 38, 0) 0.75%, rgba(38, 38, 38, 0.9) 61.94%), url("./assets/random-project-background.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center top -0.6rem;
  padding-top: 7.6rem;
  gap: 1.4rem;
}

.project-detail {
  display: flex;
  flex-direction: column;
  padding: 0.8rem 1.6rem;
  gap: 1.2rem;
  color: #fff;
}

.project-title {
  font-family: "Crete Round", serif;
  font-weight: inherit;
  font-size: 3.2rem;
  line-height: 4.4rem;
}

.project-desc {
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-family: "Inter", sans-serif;
  font-weight: 400;
}

.tech-list {
  display: flex;
  gap: 1.2rem;
  list-style: none;
  margin-bottom: 2rem;
}

.work-section-container--highlighted-project .tech-list .skills {
  font-size: 1.5rem;
  line-height: 2rem;
  padding: 1.4rem;
  background-color: #fff;
  color: #091e42;
  border: 1px solid #8993a4;
  font-family: "Inter", sans-serif;
  font-weight: 400;
}

.project_list--li__cta {
  background-color: #ba4d00;
  font-family: "Inter", sans-serif;
  line-height: 2.4rem;
  color: #fff;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  padding: 1.2rem;
  font-size: 1.7rem;
}

.work-section-container--highlighted-project .project_list--li__cta {
  width: 45%;
}

.main-header__navigation--menu__list.show .menu__item a {
  font-size: 24px;
  font-weight: 700;
}

/* About Section */

.about-section-container {
  background-color: #1c1a19;
  background-image: url("./assets/images/about-frame.svg");
  background-repeat: no-repeat;
  background-position: top 20% right;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about-section-container .intro-container {
  display: flex;
  flex-direction: column;
  padding: 12rem 2.4rem;
  gap: 2rem;
  margin-bottom: 8rem;
}

.about-section-container .intro-container .intro-container__title {
  font-family: "Crete Round", serif;
  font-weight: 400;
  font-size: 7.2rem;
  line-height: 8.8rem;
  letter-spacing: 0.37px;
  color: #ba4d00;
}

.about-section-container .intro-container .intro-container__desc {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: #f4f5f7;
}

.about-section-container .intro-container .intro-container__resumeBtn {
  font-family: "Inter", sans-serif;
  font-weight: bold;
  font-size: 1.7rem;
  line-height: 2.4rem;
  letter-spacing: 3%;
  text-align: center;
  padding: 1.2rem;
  background-color: #ba4d00;
  text-decoration: none;
  color: #fff;
  width: max-content;
}

.about-bottom {
  stroke-width: 1;
  fill: #fff;
  stroke: #fff;
  width: 90%;
}

.developer-strength-container {
  display: flex;
  flex-direction: column;
  padding: 12rem 0;
  gap: 2.4rem;
}

.strength-container {
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  align-items: center;
}

.strength-container__skills {
  display: flex;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 4.4rem;
  align-items: center;
  gap: 1.2rem;
  color: #fff;
  padding: 0.8rem 1.2rem;
}

.icon {
  width: 1.8rem;
  height: 1.8rem;
}

.lang-icon,
.framework-icon,
.skills-icon {
  background-color: #ff6b00;
}

.lang-icon {
  transform: rotate(45deg);
}

.framework-icon {
  transform: rotate(90deg);
}

.skills-icon {
  border-radius: 50%;
}

.strength-list {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 0 1.2rem;
  list-style: none;
  align-items: center;
}

.strength-list .skill {
  padding: 1.2rem 0;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 2.2rem;
  line-height: 3.27rem;
  color: #fff;
}

/* Form Section */

.form-section-container,
.form-section-container .form {
  display: flex;
  flex-direction: column;
}

.form-section-container {
  padding: 12rem 2.4rem 8rem 2.4rem;
  gap: 5.8rem;
}

.form-section-container .intro {
  font-family: "Inter", sans-serif;
  font-size: 3.2rem;
  line-height: 4.4rem;
  color: #172b4d;
  text-align: center;
}

.form-section-container .form {
  gap: 2.4rem;
}

.inputs {
  padding: 1.6rem;
  border: none;
  border-bottom: 1px solid #dbdad7;
  color: #3c3a39;
}

.message {
  border: none;
  background-color: #fbf8f7;
  height: 11.4rem;
}

.form-section-container .form .btn {
  padding: 12px;
  border: none;
  background-color: #ba4d00;
  width: max-content;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  font-size: 1.7rem;
  line-height: 2.4rem;
  color: #fff;
  margin: auto;
}

.footer {
  display: flex;
  justify-content: center;
  padding: 16px 0;
  border-top: 1px solid #dfe1e6;
}

.footer .navigation-list .navigation-list__social .navigation-list__social--link svg path {
  fill: #505f79;
}

.modol-closing {
  padding: 2rem;
}

@media (max-width: 768px) {
  .image-prag-container {
    display: flex;
    flex-direction: column;
  }

  .modal-top-content {
    display: flex;
    flex-direction: column;
  }

  .modol-pb-container {
    display: flex;
    flex-direction: column;
  }

  .project-image img {
    width: 100%;
    padding: 2rem;
  }

  .modal-info {
    padding: 2rem;
  }

  .modal-buttons {
    padding: 2rem;
    width: 100%;
    display: flex;
    flex: 1;
    justify-content: space-between;
  }

  .modal-buttons button {
    width: 48%;
  }

  .main-header__navigation--menu.reversed {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    height: 74rem;
  }

  .main-header__navigation--menu__list.show {
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: flex-start;
    transition: 0.3s;
  }

  .main-header__navigation--menu__list.show li {
    border-bottom: 1px solid #a5a8af;
    width: 100%;
    padding: 2rem;
  }

  .main-header__navigation--menu__list.show li:last-child {
    display: none;
  }

  .main-header__navigation--menu__list.show li:first-child {
    margin-top: 3rem;
  }

  .main-header__navigation--menu.reversed button .fa-bars {
    display: none;
  }

  .main-header__navigation--menu.reversed button .fa-times {
    display: block;
    color: red;
  }

  .main-header__logo.hide {
    display: none;
  }

  .hide {
    display: none;
  }

  .humbuger-btn {
    display: block;
  }

  .main-header {
    align-items: flex-start;
    padding-top: 5rem;
  }
}

@media (min-width: 768px) {
  .main-header {
    width: 100%;
    font-size: 2.3rem;
  }

  .main-header__logo {
    transition: ease-out 0.15s;
  }

  .main-header__logo:hover {
    cursor: pointer;
    transform: scale(1.25);
    transition: ease-in 0.15s;
  }

  .main-header__navigation--bar {
    display: none;
  }

  .main-header__navigation--menu__list {
    display: flex;
  }

  .menu__item .menu__item--link {
    transition: ease-out 0.15s;
  }

  .menu__item .menu__item--link:hover {
    color: crimson;
    transition: ease-out 0.15s;
  }

  .menu__item .menu__item--link:hover .msg-icon path {
    stroke: crimson;
    transition: ease-in 0.15s;
  }

  .section-intro {
    background-repeat: no-repeat;
    background-position: right -28rem top -11.25rem;
    background-size: contain;
  }

  .section_intro__primary-heading {
    transition: ease-in 0.5s;
  }

  .section_intro__primary-heading:hover {
    text-shadow: 4px 4px #fff;
    transition: ease-in 0.5s;
  }

  .section-intro__text-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    width: 60%;
    padding: 19.2rem 0;
  }

  /* SECTION 2 (WORK SECTION) */

  .work-section-container {
    display: flex;
    flex-direction: column;
    gap: 8rem;
    padding: 12rem 2.4rem;
  }

  .work-section__headline-wrapper {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2.4rem;
  }

  .work-section-container--heading {
    font-size: 3.8rem;
    font-family: "Crete Round", serif;
    font-weight: 400;
  }

  .work-bottom {
    stroke: #212121;
    width: 100%;
  }

  .work-section-container--highlighted-project {
    flex-direction: row;
    align-items: flex-start;
  }

  .work-section-container--highlighted-project:hover .project_list--li__cta {
    animation: btnEffect 0.75s ease-in-out 0.75s infinite;
  }

  @keyframes btnEffect {
    0% {
      transform: scale(1);
    }

    25% {
      transform: scale(1.15);
    }

    50% {
      transform: scale(1.2);
    }

    75% {
      transform: scale(1.15);
    }

    100% {
      transform: scale(1);
    }
  }

  .work-section-container--highlighted-project .image {
    width: 70%;
  }

  .highlighted-project--wrapper {
    width: 50%;
  }

  .highlighted-project--wrapper .project-title {
    font-family: "Crete Round", serif;
    font-weight: inherit;
    font-size: 3.2rem;
    line-height: 4.4rem;
  }

  .highlighted-project--wrapper .project-desc {
    font-size: 1.25rem;
    font-weight: 400;
  }

  .work-section-container--highlighted-project .tech-list .skills {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }

  .project-list--li {
    transition: ease-out 0.25s;
  }

  .project-list--li:hover {
    transform: scale(1.01);
    box-shadow: 5px 5px 5px 5px rgba(128, 128, 128, 0.4);
  }

  .about-section-container {
    background-image: url("./assets/images/illustration-about\ me.svg");
    background-repeat: no-repeat;
    background-position: top -25% right -25%;
    background-size: 50% 50%;
    align-items: flex-start;
  }

  .about-section-container:hover .intro-container__resumeBtn {
    animation: btnEffect 1.5s ease-in-out 0.2s infinite;
  }

  .about-section-container .intro-container {
    padding: 13rem 2.4rem;
    gap: 2.4rem;
    width: 65%;
    margin-bottom: 0;
  }

  .about-section-container .about-bottom {
    stroke: #fff;
    fill: #fff;
    width: 100%;
    padding: 0 2.4rem;
  }

  .about-section-container .intro-container__title {
    transition: ease-out 0.25s;
  }

  .about-section-container .intro-container__title:hover {
    text-shadow: 4px 4px #fff;
    transition: ease-in 0.25s;
  }

  .developer-strength-container {
    flex-direction: row;
    gap: 5rem;
    justify-content: space-between;
    width: 100%;
    padding: 13rem 2.4rem;
  }

  .developer-strength-container .strength-container__skills {
    transition: ease-out 0.25s;
  }

  .developer-strength-container .strength-container__skills:hover {
    text-decoration: 4px underline #fff;
    transition: ease-in 0.25s;
  }

  .strength-container {
    align-items: flex-start;
  }

  .strength-list {
    align-items: flex-start;
  }

  .form-section-container {
    flex-direction: row;
    padding: 13rem 2.4rem;
  }

  .form-section-container .intro {
    font-family: "Inter", sans-serif;
    font-size: 3.2rem;
    line-height: 4.4rem;
    color: #172b4d;
    text-align: left;
    width: 47%;
    transition: ease-out 0.25s;
  }

  .form-section-container .form .inputs {
    transition: ease-out 0.25s;
  }

  .form-section-container .form .inputs:hover {
    background-color: rgba(190, 196, 196, 0.25);
    transition: ease-in 0.25s;
  }

  .form-section-container .form {
    gap: 2.4rem;
    width: 45%;
  }

  .form-section-container .form .btn {
    padding: 12px;
    margin: 0;
  }

  .form-section-container .form .btn:hover {
    cursor: pointer;
    animation: btnEffect 1s ease-in-out 0.2s infinite;
  }

  .footer .navigation-list .navigation-list__social--link,
  .footer .navigation-list .navigation-list__social--link svg {
    transition: ease-out 0.15s;
  }

  .footer .navigation-list .navigation-list__social--link:hover svg {
    transform: scale(1.24);
    transition: ease-in 0.15s;
  }

  .footer .navigation-list .navigation-list__social--link:hover svg path {
    fill: crimson;
  }
}

@media (min-width: 1024px) {
  .main-header {
    padding: 0.75rem 12rem;
  }

  .main-header__navigation--bar {
    display: none;
  }

  .humbuger-btn {
    display: none;
  }

  .main-header__navigation--menu__list {
    display: flex;
  }

  .section-intro {
    background-image: url(./assets/images/Illustration-desktop.svg);
    background-position: right -30rem top -6rem;
    background-size: 100% 100%;
    padding: 0 0 0 12rem;
    position: relative;
  }

  .section-intro__text_wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    width: 52%;
    padding: 13rem 0;
  }

  .section-intro .navigation-list {
    position: absolute;
    flex-direction: column;
    list-style: none;
    gap: 1rem;
    left: -3.25rem;
    top: 50%;
    transform: translate(5rem, -50%) scale(0.9);
    justify-content: space-around;
  }

  /* SECTION 2 (WORK SECTION) */

  .work-section-container {
    display: flex;
    flex-direction: column;
    gap: 8rem;
    padding: 10rem 12rem;
  }

  .work-section__headline-wrapper {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .work-section-container--heading {
    font-size: 3.8rem;
    font-family: "Crete Round", serif;
    font-weight: 400;
  }

  .work-bottom {
    stroke: #212121;
    width: 60%;
  }

  .work-section-container--highlighted-project {
    flex-direction: row;
    align-items: flex-start;
  }

  .work-section-container--highlighted-project .image {
    width: 66%;
  }

  .highlighted-project__wrapper {
    width: 39%;
    gap: 2.4rem;
  }

  .project-title {
    font-size: 2.6rem;
    line-height: 3.4rem;
  }

  .highlighted-project__wrapper .project-title {
    font-family: "Crete Round", serif;
    font-weight: inherit;
    font-size: 2.75rem;
    line-height: 4.4rem;
  }

  .project-desc {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  .highlighted-project__wrapper .project-desc {
    font-size: 1.6rem;
    line-height: 2.25rem;
    font-weight: 400;
  }

  .work-section-container__project--list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
    grid-gap: 2.4rem;
  }

  .project-list--li {
    position: relative;
    padding-top: 4.6rem;
    padding-bottom: 1.6rem;
    gap: 1.2rem;
  }

  .project-list--li:hover {
    cursor: pointer;
    background: url("./assets/images/random-project-background.png");
    background-repeat: no-repeat;
    outline: 2px solid #212121;
    padding-bottom: 0;
  }

  .project-detail {
    padding: 0.8rem 1.6rem;
    gap: 1.2rem;
    visibility: visible;
  }

  .project-list--li:hover .project-detail {
    visibility: hidden;
  }

  .tech-list {
    gap: 1.2rem;
  }

  .tech-list .skills {
    font-size: 1rem;
    line-height: 1.6rem;
    padding: 1rem 1.2rem;
  }

  .project-list--li .project_list--li__cta {
    padding: 1rem;
    font-size: 1.25rem;
    width: 100%;
    visibility: hidden;
  }

  .project-list--li:hover > .project_list--li__cta {
    visibility: visible;
  }

  .work-section-container--highlighted-project .technology-list .skills {
    padding: 0.75rem 1.2rem;
    font-size: 1rem;
  }

  /* About Section */

  .about-section-container {
    background-position: top right;
    background-size: 40% 40%;
    padding: 0 12rem;
  }

  .about-section-container .intro-container {
    gap: 1.4rem;
    width: 54%;
    padding: 13rem 0;
    margin-bottom: 0;
  }

  .about-section-container .intro-container .intro-container__title {
    font-size: 4.2rem;
    line-height: 4.4rem;
    letter-spacing: 0.37px;
  }

  .about-section-container .intro-container .intro-container__desc {
    font-size: 1.5rem;
    line-height: 2.75rem;
  }

  .about-section-container .intro-container .intro-container__resumeBtn {
    font-size: 1.25rem;
    line-height: 2.4rem;
    letter-spacing: 3%;
    padding: 0.75rem 1.2rem;
  }

  .about-section-container .about-bottom {
    stroke: #fff;
    fill: #fff;
    width: 100%;
    padding: 0;
  }

  .developer-strength-container {
    flex-direction: row;
    gap: 5rem;
    width: 100%;
    padding: 13rem 0;
  }
}

@media (min-width: 1280px) {
  .main-header {
    padding: 1.25rem 14.2rem;
  }

  .humbuger-btn {
    display: none;
  }

  .section-intro {
    background-position: right top -5.75rem;
    background-size: contain;
    padding: 0 0 0 12rem;
  }

  .section-intro--text_wrapper {
    gap: 2.4rem;
    width: 52%;
    padding: 19.2rem 0;
  }

  .section-intro__primary-heading {
    font-size: 7.2rem;
    line-height: 8.15rem;
  }

  .section-intro__secondary-heading {
    font-size: 3.2rem;
    line-height: 4.4rem;
    font-weight: 500;
  }

  .section-intro__description {
    font-size: 2rem;
    line-height: 3.2rem;
  }

  .section-intro .navigation-list {
    gap: 1.6rem;
    left: -3.25rem;
    top: 50%;
    transform: translate(7rem, -50%) scale(1);
  }

  /* SECTION 2 (WORK SECTION) */

  .work-section-container {
    display: flex;
    flex-direction: column;
    gap: 8rem;
    padding: 10rem 14.2rem;
  }

  .section-headline--wrapper {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .work-section-container--heading {
    font-size: 3.8rem;
    font-family: "Crete Round", serif;
    font-weight: 400;
  }

  .work-bottom {
    stroke: #212121;
    width: 67%;
  }

  .work-section-container--highlighted-project {
    flex-direction: row;
    align-items: flex-start;
  }

  .work-section-container--highlighted-project .image {
    width: 52%;
  }

  .highlighted-project--wrapper {
    width: 45%;
    gap: 2.4rem;
  }

  .project-title {
    font-size: 3.2rem;
    line-height: 4.4rem;
  }

  .project-desc {
    font-size: 1.7rem;
    line-height: 2.4rem;
  }

  .highlighted-project--wrapper .project-title {
    font-family: "Crete Round", serif;
    font-weight: inherit;
    font-size: 4rem;
    line-height: 5.2rem;
  }

  .highlighted-project--wrapper .project-desc {
    font-size: 2rem;
    line-height: 2.8rem;
  }

  .technology-list .skills {
    font-size: 1.5rem;
    line-height: 2rem;
    padding: 1rem 1.2rem;
  }

  .work-section-container--highlighted-project .technology-list .skills {
    padding: 1rem 1.2rem;
    font-size: 1.5rem;
  }

  .highlighted-project--wrapper .project_list--li__cta {
    padding: 1.2rem;
    font-size: 1.7rem;
    letter-spacing: 3%;
    font-weight: bold;
  }

  .work-section-container--project-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(31rem, 1fr));
    grid-gap: 2.4rem;
  }

  .project-list--li {
    position: relative;
    padding-top: 4.6rem;
    padding-bottom: 1.6rem;
    gap: 1.4rem;
  }

  .project-list--li:hover {
    cursor: pointer;
    outline: 2px solid #212121;
  }

  .project-detail {
    padding: 2.4rem 1.6rem 0.8rem 1.6rem;
    gap: 1.2rem;
  }

  .technology-list {
    gap: 1.2rem;
  }

  .project-list--li .project_list--li__cta {
    padding: 1rem;
    font-size: 1.25rem;
    width: 100%;
    visibility: hidden;
  }

  /* About Section */

  .about-section-container {
    background-position: top 12% right;
    background-size: 40% auto;
    padding: 0 14.2rem;
  }

  .about-section-container .intro-container {
    gap: 2.4rem;
    width: 57%;
    padding: 13rem 0;
    margin-bottom: 0;
  }

  .about-section-container .intro-container .intro-container__title {
    font-size: 7.2rem;
    line-height: 8.1rem;
    letter-spacing: 0;
  }

  .about-section-container .intro-container .intro-container__desc {
    font-size: 2rem;
    line-height: 3.2rem;
  }

  .about-section-container .intro-container .intro-container__resumeBtn {
    font-size: 1.7rem;
    line-height: 2.4rem;
    letter-spacing: 3%;
    padding: 1.2rem;
  }

  .about-section-container .about-bottom {
    stroke: #fff;
    fill: #fff;
    width: 100%;
    padding: 0;
  }

  .developer-strength-container {
    padding: 13rem 0;
  }

  .strength-container {
    align-items: flex-start;
  }

  .strength-list {
    align-items: flex-start;
  }

  /* Form Section */

  .form-section-container {
    padding: 13rem 14.2rem;
    flex-direction: row;
    justify-content: center;
    gap: 2.4rem;
  }

  .form-section-container .intro {
    font-size: 4rem;
    line-height: 5.2rem;
    text-align: left;
    width: 100%;
  }

  .form-section-container .form {
    gap: 2.4rem;
    width: 100%;
  }

  .inputs {
    padding: 1.6rem;
  }

  .message {
    padding-bottom: 0;
    height: auto;
  }

  .form-section-container .form .btn {
    padding: 12px;
    font-size: 1.7rem;
    line-height: 2.4rem;
    margin-left: 0;
  }
}



==============
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Gordon | Portfolio</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css" />

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <script type="text/javascript" src="./script.js"></script>
    <script
      src="https://kit.fontawesome.com/bc4d064067.js"
      crossorigin="anonymous"
    ></script>
    <link
      href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Inter:wght@400;600;700&family=Odibee+Sans&family=Poppins&family=Roboto:wght@700&display=swap"
      rel="stylesheet"/>
</head>

<body>
  <header class="main-header" role="group" id="head">
    <span  class="main-header__logo" id="main-logo" tabindex="0">@GordonOtieno</span>
    <nav class="main-header__navigation--menu" id="reversed">
        <button onclick="toggleNav()" type="button" class="humbuger-btn" id="hamburger" >
            <i class="fa fa-bars main-header__navigationn--bar" id="bars"></i>
            <i class="fa fa-times hide" aria-hidden="true" id="times"></i>
        </button>
        <ul class="main-header__navigation--menu__list" id="nav-link">
            <li class="menu__item" id="port" onclick="reset()">
                <a class="menu__item--link" role="button" href="#section-1"
                 aria-label="navigate to portfolio section"
                >Portfolio</a>
            </li>

            <li class="menu__item" id="about" onclick="reset()">
                <a class="menu__item--link" role="button" href="#section-3"
                 aria-label="navigate to about section"
                >About</a>
            </li>

            <li class="menu__item" id="cont" onclick="reset()">
                <a class="menu__item--link" role="button" href="#section-4"
                 aria-label="navigate to contact section"
                >Contact</a>
            </li>

            <li class="menu__item" id="email">
                <a
                  role="button"
                  href="Otienogordon95@gmail.com"
                  class="menu__item--link"
                  aria-label="send an email to Otienogordon95@gmail.com"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="msg-icon"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.4 5H16.6C17.7531 5 18.4977 5.00156 19.0643 5.04785C19.6077 5.09225 19.8091 5.1676 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C20.8324 6.19091 20.9078 6.39235 20.9521 6.93567C20.9984 7.50235 21 8.24689 21 9.4V14.6C21 15.7531 20.9984 16.4977 20.9521 17.0643C20.9078 17.6077 20.8324 17.8091 20.782 17.908C20.5903 18.2843 20.2843 18.5903 19.908 18.782C19.8091 18.8324 19.6077 18.9078 19.0643 18.9521C18.4977 18.9984 17.7531 19 16.6 19H7.4C6.24689 19 5.50235 18.9984 4.93567 18.9521C4.39235 18.9078 4.19091 18.8324 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3.1676 17.8091 3.09225 17.6077 3.04785 17.0643C3.00156 16.4977 3 15.7531 3 14.6V9.4C3 8.24689 3.00156 7.50235 3.04785 6.93567C3.09225 6.39235 3.1676 6.19091 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.19091 5.1676 4.39235 5.09225 4.93567 5.04785C5.50235 5.00156 6.24689 5 7.4 5ZM1 9.4C1 7.15979 1 6.03969 1.43597 5.18404C1.81947 4.43139 2.43139 3.81947 3.18404 3.43597C4.03969 3 5.15979 3 7.4 3H16.6C18.8402 3 19.9603 3 20.816 3.43597C21.5686 3.81947 22.1805 4.43139 22.564 5.18404C23 6.03969 23 7.15979 23 9.4V14.6C23 16.8402 23 17.9603 22.564 18.816C22.1805 19.5686 21.5686 20.1805 20.816 20.564C19.9603 21 18.8402 21 16.6 21H7.4C5.15979 21 4.03969 21 3.18404 20.564C2.43139 20.1805 1.81947 19.5686 1.43597 18.816C1 17.9603 1 16.8402 1 14.6V9.4ZM6.5547 7.16795C6.09517 6.8616 5.4743 6.98577 5.16795 7.4453C4.8616 7.90483 4.98577 8.5257 5.4453 8.83205L11.4453 12.8321C11.7812 13.056 12.2188 13.056 12.5547 12.8321L18.5547 8.83205C19.0142 8.5257 19.1384 7.90483 18.8321 7.4453C18.5257 6.98577 17.9048 6.8616 17.4453 7.16795L12 10.7981L6.5547 7.16795Z"
                    />
                  </svg>
                </a>
              </li>

        </ul>
    </nav>
    </header>

    <main>
        <section id="section-1" class="section-intro" role="group" tabindex="0">
            <div class="section-intro__text-wrapper">
                <h1 class="section_intro__primary-heading">
                    Hey There. <br> I'm Gordon 
                </h1>
                <h2 class="section_intro__secondary-heading">
                    I'm a Software Developer
                </h2>
                <p class="section-intro__description">
                    I can help you build a product , feature or website Look through
                    some of my work and experience! If you like what you see and have a
                    project you need coded, don’t hestiate to contact me
                  </p>
                <ul class="navigation-list">
                    <li class="navigation-list__social">
                        <a class="navigation-list__social--link"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Gordon's Github Profile"
                        href="https://github.com/gordonotieno">
                        <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_2_850)">
                          <path
                            d="M20.9994 9.46114C20.9994 8.32124 20.6334 7.25043 19.9347 6.31779C20.2008 5.41969 20.2674 4.27979 20.2008 2.96718C20.1676 2.41451 19.735 2 19.2027 2C18.9032 2 16.3746 2.03454 14.9106 3.38169C13.6463 3.1399 12.3154 3.1399 11.0178 3.38169C9.58716 2.03454 7.05851 2 6.72579 2C6.19344 2 5.76091 2.41451 5.72764 2.96718C5.62783 4.27979 5.72764 5.41969 5.99381 6.31779C5.29511 7.28497 4.92912 8.35579 4.92912 9.46114C4.92912 11.8791 6.72579 14.0553 9.45407 15.0915C9.35426 15.2988 9.28771 15.5406 9.22117 15.7824C6.32653 15.4715 4.96239 12.7427 4.89585 12.639C4.66295 12.1209 4.06405 11.9136 3.56498 12.19C3.0659 12.4318 2.86627 13.0535 3.13245 13.5717C3.19899 13.7444 5.02893 17.4404 9.05481 17.8549V20.9637C9.05481 21.5509 9.48735 22 10.053 22H15.8755C16.4411 22 16.8737 21.5509 16.8737 20.9637V16.8532C16.8737 16.2314 16.7406 15.6442 16.5077 15.1261C19.2027 14.0553 20.9994 11.9136 20.9994 9.46114Z"
                            fill="#DBD8D7"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2_850">
                            <rect
                              width="18"
                              height="20"
                              fill="white"
                              transform="translate(3 2)"
                            />
                          </clipPath>
                        </defs>
                      </svg></a>
                    </li>

                    <li class="navigation-list__social">
                        <a
                          class="navigation-list__social--link"
                          href="https://www.linkedin.com/in/gordon-otieno-612b98184/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Gordon's linkedin profile"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_2_856)">
                              <path
                                d="M15.6444 5.03452C12.1556 5.03452 9.28857 7.8621 9.28857 11.3793V21.3104C9.28857 21.6897 9.59946 22 9.97942 22H13.5718C13.9518 22 14.2627 21.6897 14.2627 21.3104V11.6552C14.2627 10.8966 14.8844 10.2759 15.6444 10.2759C16.4043 10.2759 17.0261 10.8966 17.0261 11.6552V21.3104C17.0261 21.6897 17.3369 22 17.7169 22H21.3093C21.6893 22 22.0001 21.6897 22.0001 21.3104V11.3793C22.0001 7.89658 19.1677 5.03452 15.6444 5.03452Z"
                                fill="#DBD8D7"
                              />
                              <path
                                d="M6.28325 8.27591H2.69085C2.31088 8.27591 2 8.58625 2 8.96556V21.3104C2 21.6897 2.31088 22 2.69085 22H6.28325C6.66321 22 6.97409 21.6897 6.97409 21.3104V8.96556C6.97409 8.58625 6.66321 8.27591 6.28325 8.27591Z"
                                fill="#DBD8D7"
                              />
                              <path
                                d="M4.48705 2C3.10535 2 2 3.10345 2 4.48276C2 5.86207 3.10535 6.96552 4.48705 6.96552C5.86874 6.96552 6.97409 5.86207 6.97409 4.48276C6.97409 3.10345 5.86874 2 4.48705 2Z"
                                fill="#DBD8D7"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_2_856">
                                <rect
                                  width="20"
                                  height="20"
                                  fill="white"
                                  transform="translate(2 2)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </a>
                      </li>

                      <li class="navigation-list__social">
                        <a
                          class="navigation-list__social--link"
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Gordon's angel-list profile"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_2_869)">
                              <path
                                d="M11.464 22C16.1607 22 19.0832 18.5392 19.0832 14.0742C19.0832 12.3908 18.809 10.8708 16.8982 10.4142C17.3632 9.14083 18.7048 5.4575 18.7048 4.2775C18.7048 3.23833 18.0798 2.3675 16.9657 2.3675C15.1898 2.3675 13.5982 7.51167 13.0998 8.73833C12.714 7.625 10.9073 2 9.31484 2C8.07734 2 7.49651 2.89417 7.49651 4.01917C7.49651 5.39833 8.85734 8.9725 9.35068 10.3475C9.10068 10.2575 8.82984 10.1792 8.55401 10.1792C7.62234 10.1792 6.63151 11.3158 6.63151 12.2342C6.63151 12.5817 6.82651 13.07 6.94984 13.3942C5.48151 13.785 4.91651 14.7458 4.91651 16.195C4.91234 19.015 7.63568 22 11.464 22ZM15.489 6.21917C15.649 5.73833 16.329 3.7075 16.9657 3.7075C17.3082 3.7075 17.3998 4.055 17.3998 4.3325C17.3998 5.07833 15.864 9.2 15.5248 10.1133L14.1715 9.87917L15.489 6.21917ZM8.74651 3.8875V3.88667C8.74651 3.42167 9.32401 2.10167 10.589 5.72667L11.9665 9.645C11.3457 9.59417 10.864 9.5275 10.5582 9.7C10.124 8.575 8.74651 5.02417 8.74651 3.8875ZM8.65484 11.5308L8.65568 11.5317C9.82151 11.5317 11.3265 15.2267 11.3265 15.7267C11.3265 15.9258 11.1315 16.1717 10.9048 16.1717C10.0723 16.1717 7.84318 13.1675 7.84318 12.355C7.84651 12.0542 8.34818 11.5308 8.65484 11.5308ZM7.31484 14.5892C7.76818 14.5892 9.47568 16.945 9.47568 17.445C9.47568 17.6367 9.16901 17.7692 9.01068 17.7692C8.36984 17.7692 8.11901 17.1633 6.97734 15.7617C5.79484 16.9217 7.79318 19.1558 9.29818 19.1558C10.3365 19.1558 11.0132 18.2108 10.8107 17.515C10.9582 17.515 11.1407 17.5267 11.2765 17.4917C11.3207 18.55 11.639 19.8117 12.9365 19.9017C12.9365 19.8667 13.0165 19.6242 13.0165 19.6125C13.0165 18.9325 12.5948 18.3392 12.5948 17.6475C12.5948 16.5417 13.4582 15.4717 14.334 14.8467C14.6523 14.6125 15.039 14.4675 15.4123 14.335C15.799 14.1908 16.209 14.0225 16.5023 13.7333C16.4582 13.2958 16.2757 12.9092 15.8298 12.9092C14.7273 12.9092 11.0298 13.0658 11.0298 11.3583C11.0298 11.0967 11.034 10.8467 11.7232 10.8467C13.009 10.8467 16.2732 11.1592 17.2282 11.9833C17.9482 12.6125 18.1957 16.405 15.994 18.8075L15.9915 18.8083C14.8332 20.0583 13.3523 20.7067 11.6248 20.7067C9.26068 20.7067 7.39318 19.4333 6.49401 17.2575C5.81318 15.5625 6.64568 14.5892 7.31484 14.5892ZM12.0657 13.8858C12.4532 14.0075 12.8507 14.0433 13.249 14.1208C12.954 14.3317 12.6923 14.59 12.4407 14.8667C12.329 14.535 12.1932 14.2108 12.0657 13.8858Z"
                                fill="#DBD8D7"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_2_869">
                                <rect
                                  width="20"
                                  height="20"
                                  fill="white"
                                  transform="translate(2 2)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </a>
                      </li>

                      <li class="navigation-list__social">
                        <a
                          class="navigation-list__social--link"
                          href="https://twitter.com/GordonO34459259"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Gordon's twitter profile"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_2_870)">
                              <g clip-path="url(#clip1_2_875)">
                                <path
                                  d="M21.7665 2.3697C21.4331 1.97103 20.8665 1.87137 20.4331 2.17037L18.4998 3.49927C17.5998 2.53582 16.3331 2.00426 14.9665 2.00426C12.2665 2.00426 10.0331 4.19694 10.0331 6.92119C10.0331 7.31986 10.0665 7.6853 10.1665 8.05075C7.83313 7.55241 6.43313 5.85807 5.8998 2.8016C5.83313 2.40293 5.53313 2.10392 5.13313 2.00426C4.76646 1.90459 4.36646 2.0707 4.13313 2.3697C4.06646 2.43615 -1.43354 10.0773 6.53313 16.5557C5.76646 18.1836 3.46646 19.579 2.56646 20.0441C2.13313 20.2434 1.93313 20.7085 2.03313 21.1736C2.13313 21.6388 2.53313 21.9378 2.9998 21.9378H4.73313C14.8665 21.9378 19.4665 16.9212 19.5665 5.69195L21.6665 3.6986C22.0665 3.36638 22.0998 2.76837 21.7665 2.3697Z"
                                  fill="#DBD8D7"
                                />
                              </g>
                            </g>
                            <defs>
                              <clipPath id="clip0_2_870">
                                <rect
                                  width="20"
                                  height="20"
                                  fill="white"
                                  transform="translate(2 2)"
                                />
                              </clipPath>
                              <clipPath id="clip1_2_875">
                                <rect
                                  width="20"
                                  height="19.9667"
                                  fill="white"
                                  transform="translate(2 1.97134)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </a>
                      </li>

                      <li class="navigation-list__social">
                        <a
                          class="navigation-list__social--link"
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Gordon's medium blog profile"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M20.4042 5.88042L22 4.33768V4H16.4717L12.5317 13.9099L8.04917 4H2.2525V4.33768L4.11667 6.60547C4.29833 6.77305 4.39333 7.01811 4.36917 7.26484V16.1768C4.42667 16.4977 4.32333 16.8278 4.1 17.0611L2 19.6328V19.9663H7.95417V19.6286L5.85417 17.0611C5.62667 16.8269 5.51917 16.5027 5.565 16.1768V8.46821L10.7917 19.9705H11.3992L15.8933 8.46821V17.6312C15.8933 17.8728 15.8933 17.9225 15.7367 18.0808L14.12 19.6615V20H21.9633V19.6623L20.405 18.1204C20.2683 18.016 20.1975 17.8408 20.2267 17.6707V6.33011C20.1975 6.15916 20.2675 5.984 20.4042 5.88042Z"
                              fill="#DBD8D7"
                            />
                          </svg>
                        </a>
                      </li>
                </ul>
                
            </div>
        </section>

        <!-- work section area -->
        <section id="section-2" class="work-section-container" role="group" tabindex="0">
            <div class="work-section__headline-wrapper">
                <h2 class="work-section-container--heading">
                  My Mecent Works
                </h2>
                <svg width="795" height="2" viewBox="0 0 795 2" fill="none" xmlns="http://www.w3.org/2000/svg" class="work-bottom">
                    <path d="M794.5 1.00007L0.5 1" />
                </svg>
            </div>
           
            <div class="work-section-container--highlighted-project">
                <img src="./assets/images/Img-Placeholder.svg" alt="feature project" class="image">
                <div class="highlighted-project__wrapper">
                    <h3 class="project-title">Multi-Post Stories</h3>
                    <p class="project-desc">A daily selection of privately personalized reads; 
                        no accounts or sign-ups required. has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.</p>
                       
                    <ul class="tech-list">
                        <li class="skills">css</li>
                        <li class="skills">html</li>
                        <li class="skills">bootstrap</li>
                        <li class="skills">ruby</li>
                    </ul>
                <button role="button" type="button" onclick="displaymodal()" class="project_list--li__cta" data-toggle="modal" data-target="#myModal">See Project</button>
                </div>
            </div>
        <ul class="work-section-container__project--list 
            ">
            </ul>
        </section>

        <div class="container">
          <!-- Modal -->

          
        </div>

        <!-- about section -->
        <section id="section-3" class="about-section-container" role="group" tabindex="1">
            <div class="intro-container">
                <h2 class="intro-container__title">About Me</h2>
                <p class="intro-container__desc">
                    Hello I’m a software developer! I can help you build a product, 
                    feature or website Look through some of my work and experience! If you like what you see and have a 
                    project you need coded, don’t hestiate to contact me.
                </p>

                <a href="#"
                role="button"
                class="intro-container__resumeBtn"
                >Get Resume</a>
            </div>

            <svg width="1156" height="17" viewBox="0 0 1156 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="about-bottom">
                <path d="M0 9H1156" stroke="white"/>
            </svg>
            
            <ul class="developer-strength-container">
                <li class="strength-container">
                    <h3 class="strength-container__skills"><span class="icon lang-icon"></span>Language</h3>
                    <ul class="strength-list">
                        <li class="skill">JavaScript</li>
                        <li class="skill">Ruby</li>
                        <li class="skill">Html</li>
                        <li class="skill">Css</li>
                    </ul>
                </li>
                
                <li class="strength-container">
                    <h3 class="strength-container__skills"><span class="icon framework-icon"></span>Frameworks</h3>
                    <ul class="strength-list">
                      <li class="skill">Bootstrap</li>
                      <li class="skill">Ruby on Rails</li>
                      <li class="skill">RSPec</li>
                      <li class="skill">CapyBara</li>
                      <li class="skill">Selenium</li>
                    </ul>
                  </li>
                  <li class="strength-container">
                    <h3 class="strength-container__skills"><span class="icon skills-icon"></span>Skills</h3>
                    <ul class="strength-list">
                      <li class="skill">Codekit</li>
                      <li class="skill">Github</li>
                      <li class="skill">Codepen</li>
                      <li class="skill">Gitlab</li>
                      <li class="skill">Terminal</li>
                    </ul>
                  </li>
            </ul>
        </section>

        <!-- form section -->
        <section class="form-section-container" id="section-4" role="group" tabindex="0">
          <h2 class="intro">
            I'm always interested in hearing about new projects, 
                so if you'd like to chat please get in touch.
          </h2>
        <form
          class="form"
          method="post"
          id="signup"
          action="https://formspree.io/f/mjvlqgeq"
         >
          <input
            class="inputs"
            type="text"
            name="name"
            maxlength="30"
            aria-label="Please enter your"
            placeholder="Full Name"
            required
          />
          <input
            class="inputs"
            type="email"
            name="email"
            aria-label="Please enter your"
            placeholder="Email Address"
            required
          />
          <textarea
            class="inputs message"
            name="message"
            maxlength="500"
            rows="6"
            cols="70"
            aria-label="Please"
            placeholder="Write your message here"
            required
          ></textarea>
          <small></small>
          <input type="submit" aria-label="submit" class="btn" value="Get In Touch"/>
        </form>
        </section>
    </main>

    <footer class="footer">
        <ul class="navigation-list">
            <li class="navigation-list__social">
                <a class="navigation-list__social--link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Gordon's Github Profile"
                href="https://github.com/gordonotieno">
                <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2_858)">
                  <path
                    d="M20.9994 9.46114C20.9994 8.32124 20.6334 7.25043 19.9347 6.31779C20.2008 5.41969 20.2674 4.27979 20.2008 2.96718C20.1676 2.41451 19.735 2 19.2027 2C18.9032 2 16.3746 2.03454 14.9106 3.38169C13.6463 3.1399 12.3154 3.1399 11.0178 3.38169C9.58716 2.03454 7.05851 2 6.72579 2C6.19344 2 5.76091 2.41451 5.72764 2.96718C5.62783 4.27979 5.72764 5.41969 5.99381 6.31779C5.29511 7.28497 4.92912 8.35579 4.92912 9.46114C4.92912 11.8791 6.72579 14.0553 9.45407 15.0915C9.35426 15.2988 9.28771 15.5406 9.22117 15.7824C6.32653 15.4715 4.96239 12.7427 4.89585 12.639C4.66295 12.1209 4.06405 11.9136 3.56498 12.19C3.0659 12.4318 2.86627 13.0535 3.13245 13.5717C3.19899 13.7444 5.02893 17.4404 9.05481 17.8549V20.9637C9.05481 21.5509 9.48735 22 10.053 22H15.8755C16.4411 22 16.8737 21.5509 16.8737 20.9637V16.8532C16.8737 16.2314 16.7406 15.6442 16.5077 15.1261C19.2027 14.0553 20.9994 11.9136 20.9994 9.46114Z"
                    fill="#DBD8D7"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_858">
                    <rect
                      width="18"
                      height="20"
                      fill="white"
                      transform="translate(3 2)"
                    />
                  </clipPath>
                </defs>
              </svg></a>
            </li>

            <li class="navigation-list__social">
                <a
                  class="navigation-list__social--link"
                  href="https://www.linkedin.com/in/gordon-otieno-612b98184/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Gordon's linkedin profile"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2_854)">
                      <path
                        d="M15.6444 5.03452C12.1556 5.03452 9.28857 7.8621 9.28857 11.3793V21.3104C9.28857 21.6897 9.59946 22 9.97942 22H13.5718C13.9518 22 14.2627 21.6897 14.2627 21.3104V11.6552C14.2627 10.8966 14.8844 10.2759 15.6444 10.2759C16.4043 10.2759 17.0261 10.8966 17.0261 11.6552V21.3104C17.0261 21.6897 17.3369 22 17.7169 22H21.3093C21.6893 22 22.0001 21.6897 22.0001 21.3104V11.3793C22.0001 7.89658 19.1677 5.03452 15.6444 5.03452Z"
                        fill="#DBD8D7"
                      />
                      <path
                        d="M6.28325 8.27591H2.69085C2.31088 8.27591 2 8.58625 2 8.96556V21.3104C2 21.6897 2.31088 22 2.69085 22H6.28325C6.66321 22 6.97409 21.6897 6.97409 21.3104V8.96556C6.97409 8.58625 6.66321 8.27591 6.28325 8.27591Z"
                        fill="#DBD8D7"
                      />
                      <path
                        d="M4.48705 2C3.10535 2 2 3.10345 2 4.48276C2 5.86207 3.10535 6.96552 4.48705 6.96552C5.86874 6.96552 6.97409 5.86207 6.97409 4.48276C6.97409 3.10345 5.86874 2 4.48705 2Z"
                        fill="#DBD8D7"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_854">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(2 2)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>

              <li class="navigation-list__social">
                <a
                  class="navigation-list__social--link"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Gordon's angel-list profile"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2_866)">
                      <path
                        d="M11.464 22C16.1607 22 19.0832 18.5392 19.0832 14.0742C19.0832 12.3908 18.809 10.8708 16.8982 10.4142C17.3632 9.14083 18.7048 5.4575 18.7048 4.2775C18.7048 3.23833 18.0798 2.3675 16.9657 2.3675C15.1898 2.3675 13.5982 7.51167 13.0998 8.73833C12.714 7.625 10.9073 2 9.31484 2C8.07734 2 7.49651 2.89417 7.49651 4.01917C7.49651 5.39833 8.85734 8.9725 9.35068 10.3475C9.10068 10.2575 8.82984 10.1792 8.55401 10.1792C7.62234 10.1792 6.63151 11.3158 6.63151 12.2342C6.63151 12.5817 6.82651 13.07 6.94984 13.3942C5.48151 13.785 4.91651 14.7458 4.91651 16.195C4.91234 19.015 7.63568 22 11.464 22ZM15.489 6.21917C15.649 5.73833 16.329 3.7075 16.9657 3.7075C17.3082 3.7075 17.3998 4.055 17.3998 4.3325C17.3998 5.07833 15.864 9.2 15.5248 10.1133L14.1715 9.87917L15.489 6.21917ZM8.74651 3.8875V3.88667C8.74651 3.42167 9.32401 2.10167 10.589 5.72667L11.9665 9.645C11.3457 9.59417 10.864 9.5275 10.5582 9.7C10.124 8.575 8.74651 5.02417 8.74651 3.8875ZM8.65484 11.5308L8.65568 11.5317C9.82151 11.5317 11.3265 15.2267 11.3265 15.7267C11.3265 15.9258 11.1315 16.1717 10.9048 16.1717C10.0723 16.1717 7.84318 13.1675 7.84318 12.355C7.84651 12.0542 8.34818 11.5308 8.65484 11.5308ZM7.31484 14.5892C7.76818 14.5892 9.47568 16.945 9.47568 17.445C9.47568 17.6367 9.16901 17.7692 9.01068 17.7692C8.36984 17.7692 8.11901 17.1633 6.97734 15.7617C5.79484 16.9217 7.79318 19.1558 9.29818 19.1558C10.3365 19.1558 11.0132 18.2108 10.8107 17.515C10.9582 17.515 11.1407 17.5267 11.2765 17.4917C11.3207 18.55 11.639 19.8117 12.9365 19.9017C12.9365 19.8667 13.0165 19.6242 13.0165 19.6125C13.0165 18.9325 12.5948 18.3392 12.5948 17.6475C12.5948 16.5417 13.4582 15.4717 14.334 14.8467C14.6523 14.6125 15.039 14.4675 15.4123 14.335C15.799 14.1908 16.209 14.0225 16.5023 13.7333C16.4582 13.2958 16.2757 12.9092 15.8298 12.9092C14.7273 12.9092 11.0298 13.0658 11.0298 11.3583C11.0298 11.0967 11.034 10.8467 11.7232 10.8467C13.009 10.8467 16.2732 11.1592 17.2282 11.9833C17.9482 12.6125 18.1957 16.405 15.994 18.8075L15.9915 18.8083C14.8332 20.0583 13.3523 20.7067 11.6248 20.7067C9.26068 20.7067 7.39318 19.4333 6.49401 17.2575C5.81318 15.5625 6.64568 14.5892 7.31484 14.5892ZM12.0657 13.8858C12.4532 14.0075 12.8507 14.0433 13.249 14.1208C12.954 14.3317 12.6923 14.59 12.4407 14.8667C12.329 14.535 12.1932 14.2108 12.0657 13.8858Z"
                        fill="#DBD8D7"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2_866">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(2 2)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>

              <li class="navigation-list__social">
                <a
                  class="navigation-list__social--link"
                  href="https://twitter.com/GordonO34459259"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Gordon's twitter profile"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2_870)">
                      <g clip-path="url(#clip1_2_870)">
                        <path
                          d="M21.7665 2.3697C21.4331 1.97103 20.8665 1.87137 20.4331 2.17037L18.4998 3.49927C17.5998 2.53582 16.3331 2.00426 14.9665 2.00426C12.2665 2.00426 10.0331 4.19694 10.0331 6.92119C10.0331 7.31986 10.0665 7.6853 10.1665 8.05075C7.83313 7.55241 6.43313 5.85807 5.8998 2.8016C5.83313 2.40293 5.53313 2.10392 5.13313 2.00426C4.76646 1.90459 4.36646 2.0707 4.13313 2.3697C4.06646 2.43615 -1.43354 10.0773 6.53313 16.5557C5.76646 18.1836 3.46646 19.579 2.56646 20.0441C2.13313 20.2434 1.93313 20.7085 2.03313 21.1736C2.13313 21.6388 2.53313 21.9378 2.9998 21.9378H4.73313C14.8665 21.9378 19.4665 16.9212 19.5665 5.69195L21.6665 3.6986C22.0665 3.36638 22.0998 2.76837 21.7665 2.3697Z"
                          fill="#DBD8D7"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_2_877">
                        <rect
                          width="20"
                          height="20"
                          fill="white"
                          transform="translate(2 2)"
                        />
                      </clipPath>
                      <clipPath id="clip1_2_87">
                        <rect
                          width="20"
                          height="19.9667"
                          fill="white"
                          transform="translate(2 1.97134)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>

              <li class="navigation-list__social">
                <a
                  class="navigation-list__social--link"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Gordon's medium blog profile"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.4042 5.88042L22 4.33768V4H16.4717L12.5317 13.9099L8.04917 4H2.2525V4.33768L4.11667 6.60547C4.29833 6.77305 4.39333 7.01811 4.36917 7.26484V16.1768C4.42667 16.4977 4.32333 16.8278 4.1 17.0611L2 19.6328V19.9663H7.95417V19.6286L5.85417 17.0611C5.62667 16.8269 5.51917 16.5027 5.565 16.1768V8.46821L10.7917 19.9705H11.3992L15.8933 8.46821V17.6312C15.8933 17.8728 15.8933 17.9225 15.7367 18.0808L14.12 19.6615V20H21.9633V19.6623L20.405 18.1204C20.2683 18.016 20.1975 17.8408 20.2267 17.6707V6.33011C20.1975 6.15916 20.2675 5.984 20.4042 5.88042Z"
                      fill="#DBD8D7"
                    />
                  </svg>
                </a>
              </li>
        </ul>

    </footer>
    <script type="text/javascript" src="./validate.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script type="text/javascript" src="./projects.js"></script>
  </body>

</html>
