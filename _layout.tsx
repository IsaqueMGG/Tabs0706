import { Tabs } from "expo-router";

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          href: '/',
        }}
      />
      <Tabs.Screen
        name="Cadastro"
        options={{
          href: 'Cadastro',
        }}
      />
    </Tabs>
  );
}
