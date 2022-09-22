import jwt_decode from 'jwt-decode';

const SecurityProcess: React.FC = () => {
  const params_current_url = new URLSearchParams(location.href.split('#')[1]);
  const id_token = params_current_url.get('id_token');
  const decoded_id_token = jwt_decode(id_token as string);
  console.log('decoded_id_token = ', decoded_id_token);

  return <p>Fuck u Nvidia!!!</p>;
};

export default SecurityProcess;
