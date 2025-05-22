import React, { useState, useEffect } from 'react';
import News from '../../assets/images/project/News.png';
import Weather from '../../assets/images/project/Weather.png';

export const StudyContent = ({ onImageClick, registerImages }) => {
  const [openFile, setOpenFile] = useState(null);

  useEffect(() => {
    registerImages([Weather, News]);
  }, [registerImages]);

  const files = [
    {
      name: 'news.py',
      desc: '다음 IT뉴스 크롤링 및 Slack 전송',
      code: `
import requests
from bs4 import BeautifulSoup as bs

url = "https://news.daum.net/tech?nil_profile=mini&nil_src=news"
response = requests.get(url)
response.encoding = 'utf-8'
html_text = response.text
soup = bs(html_text, 'html.parser')

slack_webhook_url = "https://hooks.slack.com/services/..."
news_blocks = soup.select("a.item_newsheadline2")
for news in news_blocks:
    title_tag = news.select_one("strong.tit_txt")
    title = title_tag.get_text(strip=True) if title_tag else "제목 없음"
    press_tag = news.select_one("span.txt_info")
    press = press_tag.get_text(strip=True) if press_tag else "언론사 정보 없음"
    link = news.get("href")
    message = f"{press} - {title}\\n{link}"
    payload = {"text": message}
    requests.post(slack_webhook_url, json=payload)
      `.trim()
    },
    {
      name: 'weather_day.py',
      desc: '네이버 날씨(주요 정보) 크롤링 및 Slack 전송',
      code: `
from weather_day import get_naver_weather, df_to_slack_list, send_to_slack
from datetime import datetime
import pandas as pd
import re

def parse_main_weather_info(detail_texts):
    keys = ["체감", "자외선", "미세", "초미세"]
    info = dict.fromkeys(keys, "")
    for text in detail_texts:
        m = re.search(r"체감\\n?([\\d.]+°)", text)
        if m: info["체감"] = m.group(1)
        m = re.search(r"자외선지수\\n?([\\d]+ [가-힣]+)", text)
        if m: info["자외선"] = m.group(1)
        m = re.search(r"미세\\n?([가-힣]+)", text)
        if m: info["미세"] = m.group(1)
        m = re.search(r"초미세\\n?([가-힣]+)", text)
        if m: info["초미세"] = m.group(1)
    df = pd.DataFrame([info])
    return df

if __name__ == "__main__":
    temp, detail_texts, _ = get_naver_weather()
    today = datetime.now().strftime("%Y-%m-%d %H:%M")
    df_main = parse_main_weather_info(detail_texts)
    msg_lines = []
    msg_lines.append(f"*🌤️ 네이버 날씨 주요 정보* \`{today}\`")
    msg_lines.append(f"> *현재 온도*: \`{temp}\`\\n")
    if not df_main.empty:
        msg_lines.append(df_to_slack_list(df_main, "주요 정보"))
    else:
        msg_lines.append("_주요 정보를 파싱하지 못했습니다._")
    slack_message = "\\n".join(msg_lines)
    print(slack_message)
    send_to_slack(slack_message)
      `.trim()
    },
    {
      name: 'weather_parse.py',
      desc: '네이버 날씨(상세/생활 정보) 크롤링 및 Slack 전송',
      code: `
import requests
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import pandas as pd
import time
import re
from datetime import datetime

# ...생략: get_naver_weather, parse_detail_info, parse_chart_list 등 함수 정의...

if __name__ == "__main__":
    temp, detail_texts, chart_list_texts = get_naver_weather()
    today = datetime.now().strftime("%Y-%m-%d (%a)")
    msg_lines = []
    msg_lines.append(f"*🌤️ 네이버 날씨*  \`{today}\`")
    msg_lines.append(f"> *현재 온도*: \`{temp}\`\\n")
    df_detail = parse_detail_info(detail_texts)
    if not df_detail.empty:
        msg_lines.append(df_to_slack_list(df_detail, "상세 정보"))
    else:
        msg_lines.append("_상세정보를 파싱하지 못했습니다._")
    df_chart = parse_chart_list(chart_list_texts)
    if not df_chart.empty:
        msg_lines.append(df_to_slack_list(df_chart, "생활 정보"))
    else:
        msg_lines.append("_생활 정보 표를 만들지 못했습니다._")
    slack_message = "\\n".join(msg_lines)
    print(slack_message)
    send_to_slack(slack_message)
      `.trim()
    }
  ];

  return (
      <div className="space-y-8">
        <section>
          <h3 className="text-lg font-medium mb-3">구현 배경</h3>
          <div className="space-y-2 text-gray-600">
            <p>
              오라클 클라우드 서버에서 네이버의 날씨 정보(세부 날씨 포함)와 IT 뉴스를 주기적으로 크롤링하여 Slack으로 전송하는 자동화 시스템을 구축했습니다.
            </p>
            <p>
              반복적인 정보 확인을 자동화하고, 바로 확인할 수 있게 Slack Webhook을 활용했습니다.
            </p>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-medium mb-3">구현 환경</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Oracle Cloud (Rocky 서버)</li>
            <li>Python (Selenium, BeautifulSoup, requests)</li>
            <li>Crontab (주기적 실행)</li>
            <li>Slack Webhook (알림 시스템)</li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-medium mb-3">구현 내용</h3>
          <div className="space-y-4 text-gray-600">
            <div>
              <h4 className="font-medium mb-2">크롤링 대상</h4>
              <ul className="list-disc pl-5">
                <li>네이버 날씨: 현재 온도, 미세먼지, 초미세먼지 등 세부 정보 분리</li>
                <li>네이버 뉴스: 주요 IT 뉴스 추출</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">자동화 및 전송</h4>
              <ul className="list-disc pl-5">
                <li>Python 스크립트가 크론탭에 등록되어 평일 오전/오후 주기적으로 실행</li>
                <li>크롤링 결과를 Slack Webhook을 통해 지정 채널로 전송</li>
                <li>실패 시 에러 메시지도 함께 전송</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-medium mb-3">운영 효과</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>주기적으로 날씨와 뉴스를 Slack에서 바로 확인 가능</li>
            <li>운영 자동화 및 슬랙 연동 경험 축적</li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-medium mb-3">주요 크롤링 자동화 코드</h3>
          <div className="space-y-4">
            {files.map((file, idx) => (
                <div key={file.name}>
                  <button
                      onClick={() => setOpenFile(openFile === idx ? null : idx)}
                      className="w-full bg-gray-50 hover:bg-gray-100 rounded-t-lg border border-gray-200 p-4 text-left transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-gray-600">{file.name}</span>
                      <span className="text-sm text-gray-500">{file.desc}</span>
                    </div>
                  </button>
                  {openFile === idx && (
                      <div className="border-x border-b border-gray-200 rounded-b-lg">
                  <pre className="p-4 overflow-x-auto bg-gray-50 rounded-b-lg">
                    <code className="text-sm font-mono text-gray-800">
                      {file.code}
                    </code>
                  </pre>
                      </div>
                  )}
                </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-lg font-medium mb-3">크롤링 결과 예시</h3>
          <div className="flex flex-row gap-6">
            <div
                className="w-1/2 rounded-lg overflow-hidden border border-gray-200 cursor-pointer"
                onClick={() => onImageClick(0)}
            >
              <img
                  src={Weather}
                  alt="네이버 날씨 크롤링 결과"
                  className="w-full"
              />
              <div className="p-2 text-sm text-gray-600 text-center bg-gray-50">
                네이버 날씨 크롤링 결과
              </div>
            </div>
            <div
                className="w-1/2 rounded-lg overflow-hidden border border-gray-200 cursor-pointer"
                onClick={() => onImageClick(1)}
            >
              <img
                  src={News}
                  alt="다음 IT뉴스 크롤링 결과"
                  className="w-full"
              />
              <div className="p-2 text-sm text-gray-600 text-center bg-gray-50">
                다음 IT뉴스 크롤링 결과
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};