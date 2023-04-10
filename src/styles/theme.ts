// theme.ts
import { createTheme } from "@mui/material/styles";

export const neumorphicBoxShadow =
  "rgba(0, 0, 0, 0.2) 1px 1px 8px 0px, rgba(255, 255, 255, 0.8) -1px -1px 8px 0px";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#CB6CE6", // 明るい宇宙紫
      contrastText: "#FFF", // 文字色は白にしてコントラストを高くしています
    },
    secondary: {
      main: "#6C63FF", // ダークブルー
      contrastText: "#FFF", // 文字色も白にしてコントラストを高くしています
    },
    // デザイン全体の背景色をニューモフィズムに適したものに変更
    background: {
      default: "#e0e0e0",
    },
  },
  components: {
    // MUIの各コンポーネントのデフォルトスタイルをオーバーライド
    // MuiButton: {
    //   styleOverrides: {
    //     root: {
    //       // buttonスタイルをニューモフィズムに適したものに変更
    //       background: "#e0e0e0",
    //       boxShadow: neumorphicBoxShadow,
    //       borderRadius: 16, // ボタンの角の丸さを調整
    //       "&:hover": {
    //         background: "#d4d4d4",
    //       },
    //     },
    //   },
    // },
    // 他のコンポーネントもここにオーバーライドして追加
  },
});
