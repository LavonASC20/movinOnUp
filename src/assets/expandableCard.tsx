    import React, { useState } from 'react';

    function ExpandableCard({ title, collapsedContent, expandedContent } : 
                            { title: string, collapsedContent: string, expandedContent: string }) {
      const [isExpanded, setIsExpanded] = useState(false);

      const toggleExpand = () => {
        setIsExpanded(!isExpanded);
      };

      return (
        <div className="card" onClick={toggleExpand}>
          <h3>{title}</h3>
          {isExpanded ? (
            <div className="expanded-content">{expandedContent}</div>
          ) : (
            <div className="collapsed-content">{collapsedContent}</div>
          )}
        </div>
      );
    }

    export default ExpandableCard;