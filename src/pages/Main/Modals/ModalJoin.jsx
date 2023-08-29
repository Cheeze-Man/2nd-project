import React, { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import {
  emailPattern,
  koreanRegex,
  passwordPattern,
} from '../../../util/constants';
import './Modals.scss';

const BASE_URL = process.env.REACT_APP_API_KEY;

export default function ModalJoin({ handleModal, email }) {
  const [joinUserInfo, setJoinUserInfo] = useState({
    email: email,
    username: '',
    password: '',
    privateDataPeriod: '',
    phoneNumber: '',
    birthday: '',
    experienceYear: '',
    agreement: 0,
    withdraw: '',
  });

  const [agreements, setAgreements] = useState({
    agreement1: false,
    agreement2: false,
    agreement3: false,
  });
  const { agreement1, agreement2, agreement3 } = agreements;

  const handleOnSubmit = () => {
    fetch(`http://10.58.52.249:3000/users/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(joinUserInfo),
    })
      .then(res => res.json())
      .then(data => {
        const message = data.message;
        if (message === 'user is created') {
          handleModal('login');
        } else if (message === 'dataSource Error #createUser') {
          alert('가입 실패 ㅠㅠ');
        }
      });
  };

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

  const { username, password } = joinUserInfo;

  const emailIsValid = emailPattern.test(joinUserInfo.email);
  const usernameIsValid = koreanRegex.test(username);
  const passwordIsValid = passwordPattern.test(password);

  const handleCheckboxChange = e => {
    const { id } = e.target;
    setAgreements(prev => ({
      ...prev,
      [id]: !agreements[id],
    }));
  };

  const handleAllCheckboxChange = () => {
    const agreementsBln =
      agreement1 && agreement2 && agreement3 && joinUserInfo.agreement;
    setAgreements(prev => ({
      ...prev,
      agreement1: !agreementsBln,
      agreement2: !agreementsBln,
      agreement3: !agreementsBln,
    }));
    const smsBln = !agreementsBln ? 1 : 0;
    setJoinUserInfo(prev => ({
      ...prev,
      agreement: smsBln,
    }));
  };

  const allRequiredChecked = agreement1 && agreement2 && agreement3;
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
    let smsBln = joinUserInfo.agreement === 0 ? 1 : 0;
    setJoinUserInfo(prev => ({
      ...prev,
      agreement: smsBln,
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
              <input
                className="checkbox"
                type="checkbox"
                id="agreementAll"
                onChange={handleAllCheckboxChange}
              />
              <label htmlFor="agreementAll">
                <span className="agreeAll">전체 동의</span> (선택 항목에 대한
                동의 포함)
              </label>
            </div>
            <div className="checkboxLine" />
            <div className="checkboxDiv">
              <input
                className="checkbox"
                type="checkbox"
                id="agreement1"
                checked={agreement1}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="agreement1">
                만 15세 이상입니다. <span className="spanRed">(필수)</span>
              </label>
            </div>
            <div className="checkboxDiv">
              <input
                className="checkbox"
                type="checkbox"
                id="agreement2"
                checked={agreement2}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="agreement2">
                개인회원 이용약관 동의 <span className="spanRed">(필수)</span>
              </label>
            </div>
            <div className="checkboxDiv">
              <input
                className="checkbox"
                type="checkbox"
                id="agreement3"
                checked={agreement3}
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
                checked={joinUserInfo.agreement}
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
                  handlePrivateDataPeriodChange('0');
                }}
              />
              <label>탈퇴 시</label>
              <input
                type="radio"
                name="privateDataPeriod"
                onClick={() => {
                  handlePrivateDataPeriodChange('1');
                }}
              />
              <label>5년</label>
              <input
                type="radio"
                name="privateDataPeriod"
                onClick={() => {
                  handlePrivateDataPeriodChange('2');
                }}
              />
              <label>3년</label>
              <input
                type="radio"
                name="privateDataPeriod"
                onClick={() => {
                  handlePrivateDataPeriodChange('3');
                }}
              />
              <label>1년</label>
            </div>
          </div>
          <button disabled={!userInfoIsValid} onClick={handleOnSubmit}>
            회원가입
          </button>
        </main>
      </div>
    </div>
  );
}
