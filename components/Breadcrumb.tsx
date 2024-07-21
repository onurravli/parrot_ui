import React from 'react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex flex-wrap list-none p-0 m-0">
        {items.map((item, index) => (
          <li
            key={index}
            className={`${index < items.length - 1 ? 'after:content-["/"] after:px-2' : ''}`}
          >
            {item.href ? (
              <a
                href={item.href}
                className=" hover:underline"
              >
                {item.label}
              </a>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
