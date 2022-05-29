import React, {FC} from 'react';
import style from './DialogContacts.module.scss'
import DialogContact from "./DialogContact";

interface IProps {
  dialogContactData: {
    id: number,
    avatar: string,
    link: string,
    name: string
  }[]
}

const DialogContacts: FC<IProps> = (props) => {

  let dialogContactComponents = props.map((el) =>
    <DialogContact name={el.name} link={el.link} avatar={el.avatar} id={el.id} />
  );

  return (
    <div className={style.dialogsListContainer}>
      <div className={style.contactsList}>
        {dialogContactComponents}
      </div>
    </div>
  );
};

export default DialogContacts;