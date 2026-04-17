import React, { useCallback } from 'react';
import { useEntities, useEntityFilter } from '../../states/entity';
import { useNotify } from '../../states/notification';
import type { RegEntity, RegVariant } from '../../types/reg';
import { Card } from '../Card';
import { Container } from '../Container';
import * as styles from './Main.css';

const titles: { [K in RegVariant]: string } = {
  new: 'NEW ITEMS',
  passed: 'PASSED ITEMS',
  changed: 'CHANGED ITEMS',
  deleted: 'DELETED ITEMS',
};

export type Props = {};

const Content = ({
  variant,
  entities,
}: {
  variant: RegVariant;
  entities: RegEntity[];
}) => {
  const notify = useNotify();
  const title = titles[variant];

  const handleCopy = useCallback(() => {
    notify('Copied URL to clipboard');
  }, [notify]);

  if (entities.length < 1) {
    return null;
  }

  return (
    <>
      <h2 id={variant} className={styles.sectionTitle}>
        {title}
      </h2>
      <ul className={styles.grid}>
        {entities.map((entity) => (
          <li key={entity.id}>
            <Card
              href={`?id=${entity.id}`}
              entity={entity}
              menus={[]}
              onCopy={handleCopy}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export const Main = () => {
  const entity = useEntities();
  const [isFiltering] = useEntityFilter();

  return (
    <Container>
      <h1 className={styles.title}>REPORT DETAIL</h1>

      {isFiltering && entity.allItems.length === 0 ? (
        <>
          <h2 className={styles.sectionTitle}>Not found</h2>
          <p>
            No items found that match the text entered.
            <br />
            Try filtering with different keywords :)
          </p>
        </>
      ) : (
        <>
          <Content variant="changed" entities={entity.failedItems} />
          <Content variant="new" entities={entity.newItems} />
          <Content variant="deleted" entities={entity.deletedItems} />
          <Content variant="passed" entities={entity.passedItems} />
        </>
      )}
    </Container>
  );
};
