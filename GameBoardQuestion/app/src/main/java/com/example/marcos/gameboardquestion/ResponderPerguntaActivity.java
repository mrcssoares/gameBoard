package com.example.marcos.gameboardquestion;

import android.content.DialogInterface;
import android.content.Intent;
import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.TextView;
import android.widget.Toast;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.util.EntityUtils;

import java.io.IOException;

public class ResponderPerguntaActivity extends AppCompatActivity {
    String nomeJogador="", nomeSala="", fase="", player="";//jogador

    ImageButton verdadeiro, falso; //buttons
    IPserver server = new IPserver(); //servidor

    String mensagem = "";//paradas
    String[] respostas = new String[100]; //paradas
    String correta;
    TextView textoPergunta;
    String[] posicoes = new String[100];
    String respostas1="",Jogador1="", Jogador2="";


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_responder_pergunta);
        Intent intent = getIntent();
        nomeJogador = intent.getStringExtra("nomeJogador");
        Log.d("nomeJogador", nomeJogador);
        nomeSala = intent.getStringExtra("nomeSala");
        //fase = intent.getStringExtra("fase");
        player = intent.getStringExtra("player");
        ConsultarFase();//VErifica fase do jogador

        verdadeiro = (ImageButton)findViewById(R.id.imageButton_verdadeiro);
        falso = (ImageButton)findViewById(R.id.imageButton_falso);
        textoPergunta = (TextView) findViewById(R.id.textView_texto_pergunta);

        //pegaPergunta();//Pega pergunta conforme a fase do jogador
        verificaPosicoes();
        verdadeiro.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                verificaPosicoes();
                if(correta.contains("1")){
                    Log.d("correta", correta);
                    RespondePerguntaCorreta();
                    mostrarTabuleiro();
                }else{
                    Log.d("incorreta", correta);
                    RespondePerguntaIncorreta();
                    mostrarTabuleiro();
                }
                Log.d("vdd", "verdadeiro");
            }
        });

        falso.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Log.d("correta", correta);
                verificaPosicoes();
                if(correta.contains("0")){
                    RespondePerguntaCorreta();
                    mostrarTabuleiro();
                }else{
                    RespondePerguntaIncorreta();
                    mostrarTabuleiro();
                }
                Log.d(correta, "falso");
            }

        });
    }

    public void mostrarTabuleiro(){
        Intent intent = new Intent(this, TabuleiroActivity.class);
        Log.d("sala2", "chamando tabuleirio");
        intent.putExtra("nomeJogador", nomeJogador);
        intent.putExtra("nomeSala", nomeSala);
        intent.putExtra("fase", fase);
        intent.putExtra("player", player);
        startActivity(intent);
        finish();
    }

    //CONSULTANDO FASE
    public void ConsultarFase(){
        Log.d("RespPergunta", "ConsultandoFase");
        new Thread(){
            public void run(){
                try {
                    postHttpFase(nomeJogador);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }.start();
    }
    public void postHttpFase(String nome) throws IOException {
        String entrada = nome;
        if (nome.contains(" ")) {
            entrada = entrada.replaceAll(" ", "_");
        }
        Log.d("EntradaFase", entrada);
        HttpClient httpClient = new DefaultHttpClient();
        HttpPost httpPost = new HttpPost(server.caminhoPHP+"verificaFase.php?nome=" + entrada);

        final HttpResponse resposta = httpClient.execute(httpPost);
        //mensagem = EntityUtils.toString(resposta.getEntity());
        runOnUiThread(new Runnable() {
            public void run() {
                try {
                    //Toast.makeText(getBaseContext(), EntityUtils.toString(resposta.getEntity()), Toast.LENGTH_SHORT).show();
                    fase = EntityUtils.toString(resposta.getEntity());
                    Log.d("FASE", fase);
                    pegaPergunta();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        });
    }

    //PegandoPergumta de acordo com a fase :D
    public void pegaPergunta(){
        Log.d("RespPergunta", "PegandoPergunta");
        new Thread(){
            public void run(){
                try {
                    postHttp2(fase, player);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }.start();
    }
    public void postHttp2(String fase, String player) throws IOException {

        HttpClient httpClient = new DefaultHttpClient();
        HttpPost httpPost = new HttpPost(server.caminhoPHP+"obterPergunta.php?player="+ player + "&fase="+ fase);

        final HttpResponse resposta = httpClient.execute(httpPost);
        //mensagem = EntityUtils.toString(resposta.getEntity());

        runOnUiThread(new Runnable() {
            public void run() {
                try {
                    //Toast.makeText(getBaseContext(), EntityUtils.toString(resposta.getEntity()), Toast.LENGTH_SHORT).show();
                    mensagem = EntityUtils.toString(resposta.getEntity());
                    respostas = mensagem.split(";");
                    textoPergunta.setText(respostas[0]);
                    correta = respostas[1];
                    Log.d("correta", correta);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        });
    }


    //RESPONDENDO PERGUNTAS
    //CORRETA
    public void RespondePerguntaCorreta(){
        new Thread(){
            public void run(){
                try {
                    postHttpRespondeC(nomeJogador, player);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }.start();
    }
    public void postHttpRespondeC(String nome, String player) throws IOException {

        HttpClient httpClient = new DefaultHttpClient();
        HttpPost httpPost = new HttpPost(server.caminhoPHP+"responderPerguntaCorreta.php?nome=" + nome +"&player="+ player);

        final HttpResponse resposta = httpClient.execute(httpPost);
        //mensagem = EntityUtils.toString(resposta.getEntity());

        runOnUiThread(new Runnable() {
            public void run() {
                try {
                    Toast.makeText(getBaseContext(), EntityUtils.toString(resposta.getEntity()), Toast.LENGTH_SHORT).show();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        });
    }

    //INCORRETA
    public void RespondePerguntaIncorreta(){
        new Thread(){
            public void run(){
                try {
                    postHttpRespondeI(nomeJogador, player);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }.start();
    }
    public void postHttpRespondeI(String nome, String player) throws IOException {

        HttpClient httpClient = new DefaultHttpClient();
        HttpPost httpPost = new HttpPost(server.caminhoPHP+"responderPerguntaIncorreta.php?nome=" + nome +"&player="+ player);

        final HttpResponse resposta = httpClient.execute(httpPost);
        //mensagem = EntityUtils.toString(resposta.getEntity());

        runOnUiThread(new Runnable() {
            public void run() {
                try {
                    Toast.makeText(getBaseContext(), EntityUtils.toString(resposta.getEntity()), Toast.LENGTH_SHORT).show();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        });
    }

    public void verificaPosicoes(){
        Log.d("RespPergunta", "ConsultandoFase");
        new Thread(){
            public void run(){
                try {
                    postHttpP();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }.start();
    }
    public void postHttpP() throws IOException {
        HttpClient httpClient = new DefaultHttpClient();
        HttpPost httpPost = new HttpPost(server.caminhoPHP+"verificaposicoes.php");

        final HttpResponse resposta = httpClient.execute(httpPost);
        //mensagem = EntityUtils.toString(resposta.getEntity());
        runOnUiThread(new Runnable() {
            public void run() {
                try {
                    //Toast.makeText(getBaseContext(), EntityUtils.toString(resposta.getEntity()), Toast.LENGTH_SHORT).show();
                    respostas1 = EntityUtils.toString(resposta.getEntity());
                    posicoes = respostas1.split(";");
                    Jogador1 = posicoes[0];
                    Jogador2 = posicoes[1];
                    if(Jogador1.contains("5") || Jogador2.contains("5")){
                        Toast.makeText(getBaseContext(), "Você Perdeu!!", Toast.LENGTH_LONG).show();
                        finish();
                    }


                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        });
    }

}