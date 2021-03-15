import React from 'react';
import PropTypes from 'prop-types';
import { Card, Avatar, List } from 'antd';
import logo from '../../logo.png';
import { MailFilled, PhoneOutlined} from '@ant-design/icons';
import { useQuery, gql } from '@apollo/client';

const { Meta } = Card;


const GET_USERS = gql`
  query users {
    users {
        id
        name
        email
        phone
    }
  }
`;

const Users = () => {
    const { loading, error, data } = useQuery(GET_USERS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <List
            grid={{ gutter: 16, column: 3 }}
            style={{ marginLeft: 50 }}
            dataSource={data.users}
            renderItem={item => (
            <List.Item>
                <Card
                    hoverable
                    style={{ width: 300, background: '#252235' }}
                >
                    <Meta
                        avatar={<Avatar src={logo} />}
                        title={item.name}
                        description={
                            <span>
                                <MailFilled />
                                <p id="user-email">{item.email}</p>
                                <PhoneOutlined />
                                <p>{item.phone}</p>
                            </span>
                        }
                    />
                </Card>
            </List.Item>
            )}
        />
    );
};

Users.propTypes = {
    data: PropTypes.object,
    loading: PropTypes.bool,
};

export { Users, GET_USERS };