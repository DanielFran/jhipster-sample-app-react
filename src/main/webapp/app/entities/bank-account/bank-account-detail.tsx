import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './bank-account.reducer';

export const BankAccountDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const bankAccountEntity = useAppSelector(state => state.bankAccount.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="bankAccountDetailsHeading">
          <Translate contentKey="jhipsterSampleApplicationReactApp.bankAccount.detail.title">BankAccount</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{bankAccountEntity.id}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="jhipsterSampleApplicationReactApp.bankAccount.name">Name</Translate>
            </span>
          </dt>
          <dd>{bankAccountEntity.name}</dd>
          <dt>
            <span id="balance">
              <Translate contentKey="jhipsterSampleApplicationReactApp.bankAccount.balance">Balance</Translate>
            </span>
          </dt>
          <dd>{bankAccountEntity.balance}</dd>
          <dt>
            <Translate contentKey="jhipsterSampleApplicationReactApp.bankAccount.user">User</Translate>
          </dt>
          <dd>{bankAccountEntity.user ? bankAccountEntity.user.login : ''}</dd>
        </dl>
        <Button tag={Link} to="/bank-account" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/bank-account/${bankAccountEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default BankAccountDetail;
