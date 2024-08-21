/* eslint-disable react/prop-types */
import { cn } from "@/lib/utils";

const OutBadge = ({ className, text }) => {
  return (
    <div
      className={cn(
        `relative bg-orange-50 px-[0.1875rem] text-[0.625rem]/[0.875rem] font-medium text-orange-500 dark:bg-orange-950`,
        className
      )}
    >
      {text ?? "Badge"}
      <span className="absolute inset-x-[-0.1875rem] -top-px block transform-gpu text-orange-200 dark:text-orange-900">
        <svg
          width="100%"
          height="1"
          stroke="currentColor"
          strokeDasharray="3.3 1"
          aria-hidden="true"
        >
          <line x1="0" y1="0.5" x2="100%" y2="0.5" />
        </svg>
      </span>
      <span className="absolute inset-x-[-0.1875rem] -bottom-px block transform-gpu text-orange-200 dark:text-orange-900">
        <svg
          width="100%"
          height="1"
          stroke="currentColor"
          strokeDasharray="3.3 1"
          aria-hidden="true"
        >
          <line x1="0" y1="0.5" x2="100%" y2="0.5" />
        </svg>
      </span>
      <span className="absolute inset-y-[-0.1875rem] -left-px block transform-gpu text-orange-200 dark:text-orange-900">
        <svg
          width="1"
          height="100%"
          stroke="currentColor"
          strokeDasharray="3.3 1"
          aria-hidden="true"
        >
          <line x1="0.5" y1="0" x2="0.5" y2="100%" />
        </svg>
      </span>
      <span className="absolute inset-y-[-0.1875rem] -right-px block transform-gpu text-orange-200 dark:text-orange-900">
        <svg
          width="1"
          height="100%"
          stroke="currentColor"
          strokeDasharray="3.3 1"
          aria-hidden="true"
        >
          <line x1="0.5" y1="0" x2="0.5" y2="100%" />
        </svg>
      </span>
    </div>
  );
};

export default OutBadge;
