import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="@ossdev2025"
      description="東大でAIを勉強して、自分の勉強用にまとめたblogです / A blog documenting experiments in LLMOps and AI development"
    >
      <main style={{ padding: '2rem' }}>
        <h1>@ossdev2025</h1>

        <section style={{ marginBottom: '2rem' }}>
          <h2>🇯🇵 日本語</h2>
          <p>東大でAIを勉強して、自分の勉強用にまとめたblogです。</p>
          <p>
            📌 GitHubリポジトリはこちら：{' '}
            <a href="https://github.com/ossdev2025/my-ai-doc" target="_blank" rel="noopener noreferrer">
              ossdev2025/my-ai-doc
            </a>
          </p>
          <p>
            🙌 内容へのPRも歓迎しています。構成の改善や記事の追加など、お気軽にどうぞ！
          </p>
          <p>
            🐦 SNSでも情報発信中：{' '}
            <a href="https://x.com/ossdev2025" target="_blank" rel="noopener noreferrer">
              @ossdev2025（X / 旧Twitter）
            </a>
          </p>
        </section>

        <section>
          <h2>🇺🇸 English</h2>
          <p>I studied AI at the University of Tokyo and created this site to document what I learn.</p>
          <p>
            📌 GitHub repository:{' '}
            <a href="https://github.com/ossdev2025/my-ai-doc" target="_blank" rel="noopener noreferrer">
              ossdev2025/my-ai-doc
            </a>
          </p>
          <p>
            🙌 PRs are welcome — feel free to improve docs, structure, or add content!
          </p>
          <p>
            🐦 Follow on X (formerly Twitter):{' '}
            <a href="https://x.com/ossdev2025" target="_blank" rel="noopener noreferrer">
              @ossdev2025
            </a>
          </p>
        </section>
      </main>
    </Layout>
  );
}
