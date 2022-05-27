import {signIn} from '@common/api/fireAuth';

describe('로그인', () => {
  test('잘못된 비밀번호로 로그인 시도, 로그인 실패', async () => {
    const res = await signIn('qudals7613@gmail.com', 'asd');
    expect(res.status).toEqual('fail');
  });

  test('잘못된 이메일로 로그인 시도, 로그인 실패', async () => {
    const res = await signIn('qudals7613@naver.com', '1q2w3e4r');
    expect(res.status).toEqual('fail');
  });

  test('올바른 회원정보로 로그인 시도, 로그인 성공', async () => {
    const res = await signIn('qudals7613@gmail.com', '1q2w3e4r');
    expect(res.status).toEqual('success');
  });
});
