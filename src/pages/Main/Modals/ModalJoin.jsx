import React, { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import './Modals.scss';

export default function ModalJoin({ handleModal, email }) {
  const [joinUserInfo, setJoinUserInfo] = useState({
    email: email,
    username: '',
    password: '',
    phoneNumber: '',
    birthday: '',
    experienceYear: '',
    agreement: 0,
    privateDataPeriod: '',
    withdraw: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setJoinUserInfo(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePrivateDataPeriodChange = n => {
    setJoinUserInfo(prev => ({
      ...prev,
      privateDataPeriod: n,
    }));
  };

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailIsValid = emailPattern.test(joinUserInfo.email);
  const koreanRegex = /^[가-힣]{2,}$/;
  const usernameIsValid = koreanRegex.test(joinUserInfo.username);
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
  const passwordIsValid = passwordPattern.test(joinUserInfo.password);
  const [allRequiredChecked, setAllRequiredChecked] = useState(false);
  const handleCheckboxChange = event => {
    const checkboxes = document.querySelectorAll('.requiredCheckbox');
    const areAllChecked = Array.from(checkboxes).every(
      checkbox => checkbox.checked,
    );
    setAllRequiredChecked(areAllChecked);
  };
  const radioIsValid = joinUserInfo.privateDataPeriod !== '';

  const userInfoIsValid =
    emailIsValid &&
    usernameIsValid &&
    passwordIsValid &&
    allRequiredChecked &&
    radioIsValid;

  const closeModal = () => {
    handleModal();
  };

  const handleSmsAgreement = () => {
    let bln = joinUserInfo.agreement === 0 ? 1 : 0;
    setJoinUserInfo(prev => ({
      ...prev,
      agreement: bln,
    }));
  };

  return (
    <div className="modalJoin">
      <div className="modalJoinContainer">
        <header className="modalJoinHeader">
          <GrClose onClick={closeModal} />
        </header>
        <main className="modalJoinMain">
          <h1 className="modalGreeting">화원 가입</h1>
          <label htmlFor="email">
            <p className="inputNameIsEmail">이메일</p>
            <input
              className="modalInput"
              type="email"
              name="email"
              placeholder="이메일을 입력해주세요"
              value={joinUserInfo.email}
              onChange={handleInputChange}
            />
            <p className="emailAnnounce">
              사람인에서 점핏 공고에 지원한 경우, 동일한 이메일로 가입하면 지원
              정보가 연동됩니다.
            </p>
          </label>
          <label htmlFor="username">
            <p className="inputNameIsUsername">이름</p>
            <input
              className="modalInput"
              type="text"
              name="username"
              placeholder="이름을 입력해주세요"
              value={joinUserInfo.username}
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="password">
            <p className="inputNameIsuserPassword">비밀번호</p>
            <input
              className="modalInput"
              type="password"
              name="password"
              placeholder="비밀번호를 입력해주세요"
              value={joinUserInfo.password}
              onChange={handleInputChange}
            />
          </label>
          <div className="checkboxContainer">
            <div className="checkboxDiv">
              <input className="checkbox" type="checkbox" id="agreementAll" />
              <label htmlFor="agreementAll">
                <span className="agreeAll">전체 동의</span> (선택 항목에 대한
                동의 포함)
              </label>
            </div>
            <div className="checkboxLine" />
            <div className="checkboxDiv">
              <input
                className="checkbox requiredCheckbox"
                type="checkbox"
                id="agreement1"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="agreement1">
                만 15세 이상입니다. <span className="spanRed">(필수)</span>
              </label>
            </div>
            <div className="checkboxDiv">
              <input
                className="checkbox requiredCheckbox"
                type="checkbox"
                id="agreement2"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="agreement2">
                개인회원 이용약관 동의 <span className="spanRed">(필수)</span>
              </label>
            </div>
            <div className="checkboxDiv">
              <input
                className="checkbox requiredCheckbox"
                type="checkbox"
                id="agreement3"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="agreement3">
                개인정보 수집 및 이용 동의{' '}
                <span className="spanRed">(필수)</span>
              </label>
            </div>
            <div className="checkboxDiv">
              <input
                className="checkbox"
                type="checkbox"
                id="agreement"
                onChange={handleSmsAgreement}
              />
              <label htmlFor="agreement">마케팅 수신 동의</label>
            </div>
          </div>

          <div className="privateDataPeriod">
            <h1>개인정보 보유기간</h1>
            <div className="privateDataPeriodRadios">
              <input
                type="radio"
                name="privateDataPeriod"
                onClick={() => {
                  handlePrivateDataPeriodChange(0);
                }}
              />
              <label>탈퇴 시</label>
              <input
                type="radio"
                name="privateDataPeriod"
                onClick={() => {
                  handlePrivateDataPeriodChange(1);
                }}
              />
              <label>5년</label>
              <input
                type="radio"
                name="privateDataPeriod"
                onClick={() => {
                  handlePrivateDataPeriodChange(2);
                }}
              />
              <label>3년</label>
              <input
                type="radio"
                name="privateDataPeriod"
                onClick={() => {
                  handlePrivateDataPeriodChange(3);
                }}
              />
              <label>1년</label>
            </div>
          </div>
          <button disabled={!userInfoIsValid}>회원가입</button>
        </main>
      </div>
    </div>
  );
}
