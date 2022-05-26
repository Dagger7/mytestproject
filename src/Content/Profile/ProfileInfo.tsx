import React, {FC} from 'react';

interface IProps {
  designation: string;
  result: string;
}

const ProfileInfo: FC<IProps> = (props) => {
  return (
    <div>
      <span>{props.designation}: </span>
      <span>{props.result}</span>
    </div>
  );
};

export default ProfileInfo;