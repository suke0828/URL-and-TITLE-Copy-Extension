import { useEffect, useState } from 'react';

const Popup = () => {
  const [title, setTitle] = useState<string>();
  const [currentUrl, setCurrentUrl] = useState<string>();
  const [copy, setCopy] = useState<boolean>();

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      setCurrentUrl(tabs[0].url);
      setTitle(tabs[0].title);
    });
  }, []);

  const getUrlTitle = () => {
    void (async () => {
      await navigator.clipboard.writeText(`${String(currentUrl)} ${String(title)}`);
      setCopy(true);
    })();
  };

  return (
    <div style={{ width: '700px' }}>
      <ul>
        <li>Current URL: {currentUrl}</li>
        <li>Current Title: {title}</li>
      </ul>
      <p>{copy ? 'コピーしました' : null}</p>
      <button type="button" onClick={getUrlTitle}>
        URLとTitleをコピー
      </button>
    </div>
  );
};

export default Popup;
