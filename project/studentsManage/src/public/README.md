# 学生信息

> 提供一系列接口为后续学习练习
>
> 登录、注册、分页、增加等接口

## 1.登录接口

1. 登录
2. URL: /login
3. Method:POST

| 字段属性 | 字段说明 | 是否必传 |
| -------- | -------- | -------- |
| loginId | 用户名   | 是       |
| loginPassword | 用户密码 | 是       |

## 2.注册接口

1. 注册
2. URL: /register
3. Method:POST

| 字段属性 | 字段说明 | 是否必传 |
| -------- | -------- | -------- |
| loginId | 用户名   | 是       |
| loginPassword | 用户密码 | 是       |

## 3.获取个人信息

1. 获取个人信息
2. URL: /whoIam
3. Method:GET
4. 无参数

## 4.退出

1. 退出登录
2. URL: /logout


## 5.得到所有学生

1. 得到所有学生
2. URL: /student
3. Method: GET

| 字段属性 | 字段说明 | 是否必传 |
| -------- | -------- | -------- |
| page | 页码   | 是       |
| pagesize | 页容量 | 是       |

## 6.添加一个学生

1. 添加一个学生
2. URL: /student
3. Method: post

| 字段属性 | 字段说明 | 是否必传 |
| -------- | -------- | -------- |
| name |  姓名  | 是       |
| birthdate |生日  | 是       |
| sex |  性别| 是       |
| mobile |  电话| 是       |
| ClassId |  所属班级| 是       |

## 7.修改一个学生

1. 修改一个学生
2. URL: /student/:id
3. Method: patch

| 字段属性 | 字段说明 | 是否必传 |
| -------- | -------- | -------- |
| name |  姓名  | 是       |
| birthdate |生日  | 是       |
| sex |  性别| 是       |
| mobile |  电话| 是       |
| ClassId |  所属班级| 是       |

## 8.删除一个学生

1. 删除一个学生
2. URL: /student/:id
3. Method:delete


## 9.得到所有书籍

1. 得到所有书籍
2. URL: /book
3. Method: GET

| 字段属性 | 字段说明 | 是否必传 |
| -------- | -------- | -------- |
| page | 页码   | 是       |
| pagesize | 页容量 | 是       |

## 10.添加一本书籍

1. 添加一本书籍
2. URL: /book
3. Method: post

| 字段属性 | 字段说明 | 是否必传 |
| -------- | -------- | -------- |
| name |  姓名  | 是       |
| imgUrl |封面图片地址  | 是       |
| publishDate |  发布日期| 是       |
| author |  作者| 是       |


## 11. 修改书籍

1. 修改书籍
2. URL: /book/:id
3. Method: patch

| 字段属性 | 字段说明 | 是否必传 |
| -------- | -------- | -------- |
| name |  姓名  | 是       |
| imgUrl |封面图片地址  | 是       |
| publishDate |  发布日期| 是       |
| author |  作者| 是       |

## 12.删除书籍

1. 删除书籍
2. URL: /book/:id
3. Method:delete

