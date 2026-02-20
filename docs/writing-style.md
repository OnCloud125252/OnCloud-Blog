# Writing Style Guide

This document teaches AI assistants to replicate the author's personal writing tone and word choice when generating blog content. The author has two distinct voices — formal English for technical tutorials and casual Chinese for personal development logs. Follow the rules below to avoid generic, robotic output.

## Two Writing Voices

| Voice | Used for | Language | Tone |
|-------|----------|----------|------|
| English technical | Server setup, Docker, Linux, tooling tutorials | English | Impersonal, imperative, documentation-like |
| Chinese personal | Development logs, project diaries, life updates | Chinese (with English technical terms) | Casual, energetic, social-media-like |

A third hybrid style exists in the GitHub Actions article — bilingual paragraphs with formal Chinese. This is rare and was ChatGPT-edited; it does not represent the author's natural Chinese voice.

---

## English Technical Voice

### Tone rules

- Write in second person imperative: "Run the following command", "Replace `enp1s0` with the name of your network interface"
- State facts directly. No enthusiasm, no persuasion, no filler.
- One idea per paragraph. Short paragraphs (1–3 sentences).
- Open optional sections with a conditional: "If you encounter a permission error like the following..."
- Use "you" for the reader, never "we" or "I" — except in "Before Starting" context notes where first person is acceptable: "I am using **Proxmox VE 8.2.2**, but the solution should work on any Proxmox VE version."

### Article structure

Technical articles follow a fixed template:

```
# Before Starting              ← prerequisites, tested environment, links
## Supported Installation       ← "This installation procedure is tested on Ubuntu 22.04.x LTS and x86_64 architecture."
## Required Dependencies        ← internal links to other articles
## Links                        ← official docs (if applicable)

# The Problem                  ← (troubleshooting articles only) describe the error
# Identifying the Issue         ← (troubleshooting articles only) debug steps
# Installation / Solution       ← main content
# Finishing                     ← verify the result, access the service
# Little tip                    ← bonus commands, updates, edge cases
# Conclusion                    ← (troubleshooting articles only) short factual wrap-up
```

Not every article uses every section. Installation guides skip "The Problem" / "Identifying the Issue". Pure code-sharing posts (like the C++ compile script) may have no prose at all.

### Opening patterns

The "Before Starting" section always appears first and states the tested environment:

> This installation procedure is tested on Ubuntu 22.04.x LTS and x86_64 architecture.

Or with a compatibility note:

> This installation procedure is tested on Ubuntu `22.04.x LTS` with `x86_64 architecture`, but should be compatible with other version of Ubuntu.

Troubleshooting articles use first-person context instead:

> I am using **Proxmox VE 8.2.2**, but the solution should work on any Proxmox VE version.

### Closing patterns

Installation guides end with a short verification step:

> Now that the installation is complete, you can log into your Portainer Server instance by opening a web browser and going to https://localhost:9443.

Or even shorter:

> Enjoy your perfect terminal with fantastic looking, autosuggestions and syntax-highlighting~

Troubleshooting articles use a factual conclusion:

> By following the steps outlined in this blog post, you should be able to resolve the startup issues with Proxmox VE LXC containers after upgrading to Ubuntu 24.04.

### Code block conventions

Always include a language tag. Use `title` for file paths, `showLineNumbers` when referencing specific lines, and `{n,m}` for line highlighting:

````
```bash
sudo apt install nginx
```

```yaml title="docker-compose.yml"
networks:
  default:
    driver: bridge
```

```log showLineNumbers {5,21}
Settings for enp1s0:
        ...
```

```perl title="/usr/share/perl5/PVE/LXC/Setup/Ubuntu.pm" {2}
my $known_versions = {
    '24.04' => 1, # noble LTS
```
````

Common language tags: `bash`, `zsh`, `yml`/`yaml`, `log`, `perl`. Use `bash` for commands the reader should run. Use `zsh` when the shell context matters (e.g., Oh My Zsh config).

### Blockquote usage

Blockquotes are used for tips, warnings, and verification hints — never for emphasis or pull-quotes:

> Remember to config the port mapping (-p) in the command to fit your needs.
> The format of port mapping is `[host]:[container]`.

> You may test the installation by running:
>
> ```zsh
> docker --version
> ```

> You should now be able to issue Docker commands as a non-root user without using `sudo`.

### Recurring phrases

These phrases appear verbatim across multiple articles. Reuse them:

| Pattern | Example |
|---------|---------|
| Tested environment | "This installation procedure is tested on Ubuntu 22.04.x LTS and x86_64 architecture." |
| Replace placeholder | "Replace `enp1s0` with the name of your network interface:" |
| Run command | "Run the following command to apply the changes:" |
| Verification prompt | "You may test the installation by running:" |
| Troubleshooting intro | "If you encounter a permission error like the following when executing `docker` commands:" |
| Section link | "please refer to the [official setup tutorial](https://docs.portainer.io/...)" |
| Wrap-up | "By following the steps outlined in this blog post, you should be able to resolve..." |
| Compatibility caveat | "but should be compatible with other version of Ubuntu." |

### Internal cross-references

Link to specific heading anchors in other articles:

```md
- [Docker](/blog/docker/installing_docker_and_docker_compose#install-docker)
- [Docker Compose](/blog/docker/installing_docker_and_docker_compose#install-docker-compose-plugin)
```

---

## Chinese Personal Voice

### Tone rules

- Write like a social media post, not an essay. Fragments are fine. Punctuation is loose.
- Energy is high — excitement about progress, frustration about bugs, humor about setbacks.
- First person throughout. Address the audience directly.
- Never formal. Never stiff. The voice sounds like a high school / college student posting on Facebook.
- Mix sarcasm and genuine enthusiasm freely: "明道的神奇伺服器真的是XXXX有夠ㄌ安" (sarcastic) vs. "終於成功了" (genuine).

### Article structure

```
### 今日進度：              ← (or "這幾日ㄉ進度：") numbered list of accomplishments
1. ...
2. ...

[Narrative paragraphs]       ← casual storytelling about the day's work

ฅ^•ﻌ•^ฅ                      ← cat emoticon sign-off (every single post)

#### [Screenshot caption]    ← h4 headings for screenshot sections
![](url)
```

The progress list comes first, the story fills in the details, and screenshots go at the end with `####` captions.

### Greetings and sign-offs

Greetings (not every post has one, but when present):

| Greeting | Source |
|----------|--------|
| `找安各位~` | Day 2, Day 3 |
| `晚安各位~` | Day 4 |
| `嗨嗨大家，晚上好 ~` | Day 5 |

Sign-off (every post, no exceptions):

```
ฅ^•ﻌ•^ฅ
```

This cat emoticon appears on its own line at the end of the prose section, before any screenshots.

### Internet culture markers

| Marker | Meaning | Example |
|--------|---------|---------|
| `www` | Laughing (from Japanese ワラワラワラ) | "其實是之前用錯方法www" |
| `xD` | Laughing face | ".......太多了寫不完 xD" |
| Zhuyin abbreviations | Casual tone shorthand | "ㄌ" (了), "ㄍ" (個), "ㄉ" (的) |
| Emoji | Genuine emotion | 🤣🎉💪😢😁😅😡 |
| `!!!` | Emphasis (multiple exclamation marks) | "終於!!!" |
| `---` | Informal dash (triple hyphen, not em dash) | "解鎖新技能---記事本寫程式🤣" |
| `註:` | Footnote marker | "註:那個cookie過期了不用擔心" |

Zhuyin abbreviations in context:

> 之後的考試要認真ㄌ

> 這幾日ㄉ進度：

> 順便抱怨ㄍ

### Transitional phrases

These phrases drive the narrative rhythm. Use them naturally:

| Phrase | Usage |
|--------|-------|
| `先說結果:` | Lead with the outcome before telling the story |
| `終於!!!` / `終於...` | After a breakthrough |
| `經過幾個小時` / `經過今天十個小時` | Time framing for effort |
| `不過...` | Contrast or caveat |
| `當然，...` | Acknowledging the obvious, introducing future plans |
| `另外...` | Tangent or secondary topic |
| `於是...` | Cause and effect |
| `雖然說...不過...` | Concession pattern |
| `總之` | Wrapping up a tangent |
| `先說，...` | Preemptive clarification |

Example passage using these markers:

> 先說結果:
> 取得課表的速度超快，時間加起來不到5秒，而且還不用輸入帳號密碼🎉🎉🎉
>
> 終於!!!
> 經過今天十個小時(包含修息時間九個小時)的努力，終於成功了
> 之前的程式碼砍掉重寫(單純因為心情不好www)
> 雖然說過程很累，不過結果還是讓我很滿意的

### Chinese/English mixing rules

- Technical terms stay in English: `cookie`, `API`, `Docker`, `Express`, `big5`, `utf-8`, `Discord Bot`, `GitHub`, `CROS`
- Brand names stay in English: `Starbucks`, `AWS`, `Markdown`
- Project-specific proper nouns use their original form: `NewMD`, `Powerlevel10k`
- Chinese surrounds English terms without spaces: "經過幾個小時的優化" but "透過 API 回報情況" — spacing is inconsistent and casual; do not overthink it
- Section headers for links/code can be pure Chinese creative labels: "程式福利區"

### Emotional vocabulary

The author expresses feelings directly and physically:

| Feeling | Expression |
|---------|------------|
| Exhaustion | "爆肝寫", "做起來真的累死人" |
| Frustration | "砍掉重寫", "真的是XXXX有夠ㄌ安", "害我以為程式寫錯" |
| Excitement | "速度超快", "超好看", "成功了🎉" |
| Self-deprecation | "因為成績太爛被二班國文老師\"特別關注\"", "我的肝不好" |
| Humor | "我們保證在大家的有生之年一定可以完成 🤣" |

---

## Shared Conventions

### Heading levels

| Level | Usage |
|-------|-------|
| `#` | Major sections (Before Starting, Installation, Finishing) |
| `##` | Subsections within a major section |
| `###` | Progress lists in Chinese posts ("今日進度：") |
| `####` | Screenshot captions in Chinese posts, plugin names in English posts |

### Image hosting and captioning

- GitHub user-content: `https://user-images.githubusercontent.com/75195127/...`
- ibb.co: `https://i.ibb.co/...`
- Images use bare `![](url)` syntax with no alt text
- In Chinese posts, images appear after `####` caption headings
- In English posts, images appear inline after the paragraph they illustrate

### Trailing double spaces

Both voices use trailing double spaces (`  `) for soft line breaks within paragraphs. This is a deliberate formatting choice, not an accident:

```md
To configure the MTU properly, use Docker from `apt` instead of `snap`.
If you have already installed Docker through the system installation, remove the snap version of Docker first.
```

### Frontmatter conventions

| Field | English technical | Chinese personal |
|-------|-------------------|------------------|
| `title` | Sentence case, descriptive ("Installing Docker and Docker Compose") | "NewMD Day N" or "NewMD Day N-time" |
| `description` | Full English sentence | Short Chinese phrase ("嘗試抓學校課表、記事本寫程式") |
| `tags` | Lowercase, hyphenated (`["docker", "docker-compose", "ubuntu"]`) | Includes `"newmd"`, `"blog"`, `"life"`, `"from-facebook"` |
| `published` | `true` | `true` |

---

## AI Patterns to Avoid

When generating content for this blog, actively avoid these patterns. They are the fastest way to make text sound fake.

### No significance inflation

The author never inflates importance. A Docker install guide is just a Docker install guide.

| Bad | Good |
|-----|------|
| "Docker serves as a pivotal tool in modern development" | (just start the install steps) |
| "This marks a significant milestone in the project" | "終於成功了" |
| "showcasing the power of automation" | "自動化了編譯和發布過程" |

### No promotional language

The author describes tools factually, never pitches them.

| Bad | Good |
|-----|------|
| "the vibrant Pi-hole ecosystem" | "Pi-hole" |
| "Zsh boasts a rich plugin system" | "Install plugins (Optional)" |
| "the groundbreaking Portainer dashboard" | "Portainer, a gui tool for managing docker containers" |

### No filler phrases

The author's English is terse. The Chinese is chatty but never padded with generic filler.

| Bad | Good |
|-----|------|
| "In order to achieve optimal configuration..." | "To configure the MTU properly..." |
| "It is important to note that..." | (just state the thing) |
| "In today's rapidly evolving landscape..." | (delete entirely) |

### No sycophantic tone

The author never flatters the reader or expresses artificial excitement about the topic.

| Bad | Good |
|-----|------|
| "Great choice setting up Zsh!" | "Install Zsh" |
| "You'll love how Pi-hole blocks ads!" | "Set up Pi-hole using Docker and Docker Compose for ad-blocking and DNS server" |

### No em dash overuse

The author uses triple hyphens (`---`) in Chinese for informal dashes. Em dashes (`—`) do not appear in any article. In English articles, commas and periods handle all clause separation.

### No emoji in English articles

Emoji appear only in Chinese personal posts. English technical articles have zero emoji. The only exception is the C++ script which has emoji in the bash script itself (not in prose).

### No generic conclusions

The author's conclusions are either factual verification steps or absent entirely.

| Bad | Good |
|-----|------|
| "The future of containerization looks bright" | "Now that the installation is complete, you can log into your Portainer Server instance..." |
| "We've successfully set up a powerful development environment" | "Enjoy your perfect terminal with fantastic looking, autosuggestions and syntax-highlighting~" |

### No copula avoidance

Use "is" and "are" freely. The author never writes "serves as", "stands as", or "functions as".

| Bad | Good |
|-----|------|
| "Docker Compose serves as a tool for..." | "Docker Compose is a tool for..." |
| "Pi-hole stands as a reliable ad blocker" | "Pi-hole" (no description needed if context is clear) |

### No rule-of-three

The author never forces ideas into groups of three for rhetorical effect.

| Bad | Good |
|-----|------|
| "Speed, simplicity, and reliability" | (describe the specific benefit that matters) |
| "Build, test, and deploy with confidence" | "automate the entire build and release process" |

### No synonym cycling

The author reuses the same word when referring to the same thing. "Container" stays "container" throughout, never cycling through "instance", "unit", "service".

### No bolded inline headers in lists

The author uses plain numbered or bulleted lists without `**Header:**` patterns:

```md
<!-- Bad -->
- **Step 1:** Create the volume
- **Step 2:** Download the container

<!-- Good -->
1. Create the volume that Portainer Server will use to store its database:
2. Download and install the Portainer Server container:
```

### No curly quotes

Use straight quotes (`"..."`) only. The blog renders in a code-oriented environment where curly quotes look out of place.
