import { Column, CreatedAt, DataType, Model, PrimaryKey, Table, UpdatedAt } from 'sequelize-typescript';

@Table({
  tableName: 'user',
})
export class User extends Model<User> {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    field: 'user_id',
    allowNull: false,
    comment: '회원 ID',
  })
  userId: number;

  @Column({
    type: DataType.STRING({ length: 40 }),
    field: 'uid',
    allowNull: false,
    comment: '회원 Firebase UID',
  })
  uid: string;

  @Column({
    type: DataType.STRING({ length: 100 }),
    field: 'email',
    allowNull: false,
    comment: '회원 이메일',
  })
  email: string;

  @Column({
    type: DataType.STRING({ length: 20 }),
    field: 'nickname',
    allowNull: false,
    comment: '회원 닉네임',
  })
  nickname: string;

  @CreatedAt
  @Column({
    type: DataType.DATE,
    field: 'created_at',
    allowNull: false,
    comment: '회원 가입 일자',
  })
  createdAt: Date;

  @UpdatedAt
  @Column({
    type: DataType.DATE,
    field: 'updated_at',
    allowNull: false,
    comment: '마지막 수정 일자',
  })
  updatedAt: Date;
}
