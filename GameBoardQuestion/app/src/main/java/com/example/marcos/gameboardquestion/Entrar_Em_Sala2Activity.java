package com.example.marcos.gameboardquestion;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.util.EntityUtils;

import java.io.IOException;

public class Entrar_Em_Sala2Activity extends AppCompatActivity {
    IPserver server = new IPserver();
    String nomeSala = "";
    String fase="1", player="1";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_entrar__em__sala2);

        Button button_confirmar = (Button) findViewById(R.id.button_jogador_2);

        Intent intent = getIntent();
        nomeSala = intent.getStringExtra("nomeSala");
        final EditText edtTxtNomeJogador = (EditText)findViewById(R.id.editText_nome_jogador_2);
        final TextView textViewNomeJogador2 = (TextView)findViewById(R.id.textView_nome_jogador_2);
        button_confirmar.setOnClickListener( new View.OnClickListener(){

            @Override
            public void onClick(View view) {
                if (edtTxtNomeJogador.getText().length() == 0) {//como o tamanho é zero é nulla aresposta

                    edtTxtNomeJogador.setError("Campo vazio");

                } else if (edtTxtNomeJogador.getText().length() < 4) {

                    edtTxtNomeJogador.setError("Minimo 4 letras");

                } else {
                    RegistraJogadorSala();
                    mostraResponderPerguntas2(edtTxtNomeJogador.getText().toString(), nomeSala);

                }
            }
        });


    }

    public void mostraResponderPerguntas2(String nomeJogador, String nomeSala){
        Intent intent = new Intent(this, TabuleiroActivity.class);
        Log.d("sala2", "chamando tabuleirio");
        intent.putExtra("nomeJogador", nomeJogador);
        intent.putExtra("nomeSala", nomeSala);
        intent.putExtra("fase", fase);
        intent.putExtra("player", player);
        startActivity(intent);
        finish();
    }
    public void RegistraJogadorSala(){
        new Thread(){
            public void run(){

                EditText edtTxtNomeJogador = (EditText)findViewById(R.id.editText_nome_jogador_2);
                try {
                    postHttpJogador(nomeSala, edtTxtNomeJogador.getText().toString());
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }.start();
    }
    public void postHttpJogador(String nome, String jogador) throws IOException {
        String entrada = nome;
        String entradaJogador = jogador;

        if (nome.contains(" ")) {
            entrada = entrada.replaceAll(" ", "_");
        }
        if (jogador.contains(" ")) {
            entradaJogador = entradaJogador.replaceAll(" ", "_");
        }

        HttpClient httpClient = new DefaultHttpClient();
        HttpPost httpPost = new HttpPost(server.caminhoPHP+"entrarSala2.php?nome=" + entradaJogador+"&sala="+entrada);

        final HttpResponse resposta = httpClient.execute(httpPost);
        //mensagem = EntityUtils.toString(resposta.getEntity());

        runOnUiThread(new Runnable() {
            public void run() {
                try {
                    Toast.makeText(getBaseContext(), EntityUtils.toString(resposta.getEntity()), Toast.LENGTH_LONG).show();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        });
    }

}
