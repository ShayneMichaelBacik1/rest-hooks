import React from 'react';
import parseLink from 'parse-link-header';
import { Pagination } from 'antd';
import type { History } from 'history';
import { useController } from '@anansi/router';
const handleChange =
  (history: History) => (page: number, pageSize?: number) => {
    history.push(history.location.pathname + `?page=${page}`);
  };

interface PageProps {
  link: string;
}
function LinkPagination({ link }: PageProps) {
  const controller = useController();
  const parsed = parseLink(link);
  const curPage =
    parsed && parsed.next
      ? Number.parseInt(parsed.next.page) - 1
      : parsed && parsed.prev
      ? Number.parseInt(parsed.prev.page) + 1
      : 1;
  let total, pageSize;
  if (!parsed) {
    total = 1;
    pageSize = 50;
  } else if (parsed.last) {
    total = Number.parseInt(parsed.last.page);
    pageSize = Number.parseInt(parsed.last.per_page);
  } else {
    pageSize = Number.parseInt(parsed.first.per_page);
    total = curPage;
  }
  return (
    <Pagination
      defaultCurrent={curPage}
      total={total * pageSize}
      pageSize={pageSize}
      onChange={handleChange(controller.history)}
    />
  );
}

export default LinkPagination;
