class SignupPage {
  constructor($main) {
    this.$main = $main;
  }

  // span 생성
  createElemSpan() {
    const span = document.createElement('span');
    span.setAttribute('class', 'form_elem');

    return span;
  }

  // input 이름/이메일
  createInputElem(inputId, inputPlaceholder) {
    const span = this.createElemSpan();

    const input = document.createElement('input');
    input.setAttribute('id', inputId);
    input.setAttribute('placeholder', inputPlaceholder);
    span.appendChild(input);

    return span;
  }

  // select 선택
  selectOption(optionValue, optionText) {
    const option = document.createElement('option');
    option.setAttribute('value', optionValue);
    option.innerHTML = optionText;

    return option;
  }

  // select
  createFormElem() {
    const span = this.createElemSpan();

    const select = document.createElement('select');
    select.setAttribute('id', 'role');
    select.setAttribute('name', 'role');

    const valueSelect = this.selectOption('', '직군을 선택해 주세요');
    const valueBackend = this.selectOption('backend', '백엔드');
    const valueFrontend = this.selectOption('frontend', '프론트엔드');
    const valueFullstack = this.selectOption('fullstack', '풀스택');

    select.appendChild(valueSelect);
    select.appendChild(valueBackend);
    select.appendChild(valueFrontend);
    select.appendChild(valueFullstack);
    span.appendChild(select);

    return span;
  }

  // 등록 버튼
  submitButton(btnText) {
    const span = this.createElemSpan();

    const button = document.createElement('button');
    button.setAttribute('type', 'submit');
    button.innerText = btnText;

    span.appendChild(button);

    return span;
  }

  render() {
    const signup_form_container = document.createElement('div');
    signup_form_container.setAttribute('id', 'form_container');

    const name_elem = this.createInputElem('name', '이름');
    const email_elem = this.createInputElem('email', '이메일');

    const select_elem = this.createFormElem();

    const submit_btn = this.submitButton('등록');

    signup_form_container.appendChild(name_elem);
    signup_form_container.appendChild(email_elem);
    signup_form_container.appendChild(select_elem);
    signup_form_container.appendChild(submit_btn);
    this.$main.appendChild(signup_form_container);
  }
}

export default SignupPage;

{
  /* 
<div id="form_container">
  <span class="form_elem">
    <input id="name" placeholder="이름" />
  </span>
  <span class="form_elem">
    <input id="email" placeholder="이메일" />
  </span>
  <span class="form_elem">
    <select id="role" name="role">
      <option value="">직군을 선택해주세요</option>
      <option value="backend">백엔드</option>
      <option value="frontend">프론트엔드</option>
      <option value="fullstack">풀스택</option>
    </select>
  </span>
  <span class="form_elem">
    <button type="submit">등록</button>
  </span>
</div>; 
*/
}
