import { useState } from 'react';
import { Form, Input, Button, Row, Typography, Space, Checkbox } from 'antd';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/index'

const { Text } = Typography;

export const Auth = () => {
  const [error, setError] = useState('');
  const [ hasAccount, setHasAccount] = useState(false);

  // console.log(error, 'error');
  // console.log(auth, 'auth');
  console.log(hasAccount, 'hasAccount');

  const onFinish = async (values) => {
    try {
      const { email, password } = values;
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (e) {
      console.error(e);
      setError(e.message);
    }
    console.log('Success:', values);
  };

  const handleLogOut = async () => {
    try {
      await signOut(auth);
    } catch (e) {
      setError(e.message)
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleCheckBoxChange = (e) => setHasAccount(e.target.checked);


  return (
    <Row justify="center">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}

        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              required: true,
              message: 'Requis',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Requis',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Space>
            <Button type="primary" htmlType="submit">
               {hasAccount ? "S'authentifier" : "Créer un compte"}
            </Button>
            <Button type="primary" onClick={handleLogOut}>
              Se deconnecter
            </Button>
          </Space>
        </Form.Item>
        <Checkbox onChange={handleCheckBoxChange}>J'ai déjà un compte</Checkbox>
        <Text type="danger">{error}</Text>
      </Form>
    </Row>
  )
}

export default Auth;
