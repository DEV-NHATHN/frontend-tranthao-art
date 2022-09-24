import { useRecoilState } from 'recoil';
import { todoAtom } from '@/atoms';

export default function Listener() {
  // Listener
  const todo = useRecoilState(todoAtom) as any;

  return <div>{todo}</div>;
}
